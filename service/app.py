import os
import pprint
import web
import requests
import json
import time
import logging
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import google.auth
from google.cloud import language_v1
import vertexai
from vertexai.preview.language_models import (
    ChatModel,
    InputOutputTextPair,
    TextGenerationModel,
    CodeGenerationModel,
)
from langchain.chat_models import ChatVertexAI
from langchain.prompts.chat import (
    ChatPromptTemplate,
    SystemMessagePromptTemplate,
    HumanMessagePromptTemplate,
)
from langchain.schema import HumanMessage, SystemMessage
from langchain.llms import VertexAI
from langchain import PromptTemplate, LLMChain
from langchain.chains import SimpleSequentialChain
from langchain.chains.router import MultiPromptChain
from langchain.chains import ConversationChain
from langchain.chains.router.embedding_router import EmbeddingRouterChain
from langchain.embeddings import VertexAIEmbeddings
from langchain.vectorstores import Chroma

__import__("pysqlite3")
import sys

sys.modules["sqlite3"] = sys.modules.pop("pysqlite3")

chat = ChatVertexAI()
vertexai.init(
    project=os.environ.get("GCLOUD_PROJECT"),
    location=os.environ.get("VERTEX_REGION"),
)

language_client = language_v1.LanguageServiceClient()

urls = (
    "/assistant/chat",
    "chat_manager",
    "/assistant/prompt",
    "prompt_manager",
    "/assistant/code",
    "code_manager",
    "/assistant/langchain",
    "langchain_manager",
    "/data(.*)",
    "data_manager",
    "/docs(.*)",
    "docs_manager",
    "/language/entities",
    "language_manager",
    "/",
    "redirect_manager",
)

app = web.application(urls, globals())

if not firebase_admin._apps:
    cred = credentials.ApplicationDefault()
    firebase_admin.initialize_app(
        cred,
        {
            "projectId": cred.project_id,
        },
    )

db = firestore.client()

prompt_model = os.environ.get("PROMPT_MODEL")
if not prompt_model:
    prompt_model = "text-bison"

prompt_model_medical = os.environ.get("PROMPT_MODEL_MEDICAL")
if not prompt_model_medical:
    prompt_model_medical = "text-bison"

chat_model = os.environ.get("CHAT_MODEL")
if not prompt_model:
    prompt_model = "chat-bison"


class language_manager:
    def OPTIONS(self):
        web.header("Access-Control-Allow-Origin", "*")
        web.header("Access-Control-Allow-Methods", "*")
        web.header("Access-Control-Allow-Headers", "*")
        return "200 OK"

    def POST(self):
        inputData = {}
        type_ = language_v1.Document.Type.PLAIN_TEXT
        description = ""
        results = []

        if web.data():
            print("have web data")
            inputData = json.loads(web.data())
            description = inputData["description"]

        document = {"content": description, "type_": type_}

        # Available values: NONE, UTF8, UTF16, UTF32
        encoding_type = language_v1.EncodingType.UTF8

        response = language_client.analyze_entities(
            request={"document": document, "encoding_type": encoding_type}
        )

        for entity in response.entities:
            results.append(
                {
                    "name": entity.name,
                    "type": entity.type,
                    "salience": entity.salience,
                    "isHumanOrgan": self.getIfHumanOrgan(entity.name),
                    "isDisease": self.getIfDisease(entity.name),
                }
            )

            pieces = entity.name.split(" ")

            while "" in pieces:
                pieces.remove("")

            for piece in pieces:
                results.append(
                    {
                        "name": piece,
                        "type": entity.type,
                        "salience": entity.salience,
                        "isHumanOrgan": self.getIfHumanOrgan(piece),
                        "isDisease": "false",
                    }
                )

        web.header("Access-Control-Allow-Origin", "*")
        web.header("Content-Type", "application/json")

        return json.dumps({"description": description, "entities": results})

    def getIfHumanOrgan(self, term):
        parameters = {
            "temperature": 0.2,
            "max_output_tokens": 256,
            "top_p": 0.8,
            "top_k": 40,
        }
        model = TextGenerationModel.from_pretrained("text-bison@001")
        response = model.predict(
            "answer the following question with either true or false. Is"
            + term
            + " a human organ?",
            **parameters,
        )

        return response.text

    def getIfDisease(self, term):
        parameters = {
            "temperature": 0.2,
            "max_output_tokens": 256,
            "top_p": 0.8,
            "top_k": 40,
        }
        model = TextGenerationModel.from_pretrained("text-bison@001")
        response = model.predict(
            "answer the following question with either true or false. Is"
            + term
            + " a disease or condition that humans can get?",
            **parameters,
        )

        return response.text


class code_manager:
    def OPTIONS(self):
        web.header("Access-Control-Allow-Origin", "*")
        web.header("Access-Control-Allow-Methods", "*")
        web.header("Access-Control-Allow-Headers", "*")
        return "200 OK"

    def POST(self):
        inputData = {}
        question = ""

        if web.data():
            inputData = json.loads(web.data())
            question = inputData["question"]

        parameters = {"max_output_tokens": 1024, "temperature": 0.2}
        model = CodeGenerationModel.from_pretrained("code-bison")
        response = model.predict(question, **parameters)
        print(f"Response from Model: {response.text}")

        web.header("Access-Control-Allow-Origin", "*")
        web.header("Content-Type", "application/json")
        return json.dumps({"question": question, "answer": response.text})


class prompt_manager:
    def OPTIONS(self):
        web.header("Access-Control-Allow-Origin", "*")
        web.header("Access-Control-Allow-Methods", "*")
        web.header("Access-Control-Allow-Headers", "*")
        return "200 OK"

    def POST(self):
        inputData = {}
        question = ""
        model = prompt_model
        output = "HTML"
        if web.data():
            inputData = json.loads(web.data())
            question = inputData["question"]
            if "model" in inputData:
                model = inputData["model"]

            if "output" in inputData:
                output = inputData["output"]

        answer = predict_large_language_model(model, 0.2, 512, 0.8, 40, question)

        if output == "HTML":
            answer = answer.replace("\n", "<br/>")

        web.header("Access-Control-Allow-Origin", "*")
        web.header("Content-Type", "application/json")
        return json.dumps({"question": question, "answer": answer})


class chat_manager:
    def POST(self):
        inputData = {}
        question = ""
        model = chat_model
        if web.data():
            print("have web data")
            inputData = json.loads(web.data())
            question = inputData["question"]
            if "model" in inputData:
                model = inputData["model"]

        print("Calling vertex LLM model with question: " + question)

        answer = self.predict_large_language_model(model, question)

        web.header("Access-Control-Allow-Origin", "*")
        web.header("Content-Type", "application/json")

        return json.dumps({"question": question, "answer": answer})

    def predict_large_language_model(self, model_name: str, question: str):
        chat_model = ChatModel.from_pretrained(model_name)
        parameters = {
            "temperature": 0.2,
            "max_output_tokens": 512,
            "top_p": 0.8,
            "top_k": 40,
        }

        chat = chat_model.start_chat(
            context="You are a smart doctor who can answer patient's questions on different healthcare and medical topics.",
            examples=[
                InputOutputTextPair(
                    input_text="What is the best AI model approach for recognizing liver lesions?",
                    output_text="AI can also be used to predict complications of liver cirrhosis. Marozas et al. used US elastography and blood tests as training data for AI models and discriminated cases with pressure differences between the portal vein and hepatic vein.",
                )
            ],
        )
        response = chat.send_message(question, **parameters)
        return response.text


class langchain_manager:
    def OPTIONS(self):
        web.header("Access-Control-Allow-Origin", "*")
        web.header("Access-Control-Allow-Methods", "*")
        web.header("Access-Control-Allow-Headers", "*")
        return "200 OK"

    def POST(self):
        inputData = {}
        question = ""
        if web.data():
            print("have web data")
            inputData = json.loads(web.data())
            question = inputData["question"]

        print("Calling vertex LLM model with question: " + question)

        llm = VertexAI(model_name=prompt_model, max_output_tokens=512)
        med_llm = VertexAI(model_name=prompt_model_medical, max_output_tokens=512)

        medicine_template = """You are a very smart doctor. \
        You are great at answering questions about medicine in a concise and easy to understand manner. \
        When you don't know the answer to a question you admit that you don't know.

        Here is a question:
        {question}"""

        general_template = """You are a very smart data scientist. \
        You are great at answering questions about data science and general topics in a concise and easy to understand manner. \
        When you don't know the answer to a question you admit that you don't know.

        Here is a question:
        {question}"""

        prompt_infos = [
            {
                "name": "medicine",
                "description": "Good for answering questions about medicine",
                "prompt_template": medicine_template,
                "llm": med_llm,
            },
            {
                "name": "general",
                "description": "Good for answering questions about data science and general topics",
                "prompt_template": general_template,
                "llm": llm,
            },
        ]

        names_and_descriptions = [
            ("medicine", ["for questions about medicine"]),
            ("general", ["for questions about data science and general topics"]),
        ]

        destination_chains = {}
        for p_info in prompt_infos:
            name = p_info["name"]
            prompt_template = p_info["prompt_template"]
            prompt = PromptTemplate(
                template=prompt_template, input_variables=["question"]
            )
            chain = LLMChain(llm=p_info["llm"], prompt=prompt)
            destination_chains[name] = chain

        default_chain = ConversationChain(llm=llm, output_key="answer")

        router_chain = EmbeddingRouterChain.from_names_and_descriptions(
            names_and_descriptions,
            Chroma,
            VertexAIEmbeddings(),
            routing_keys=["question"],
        )

        chain = MultiPromptChain(
            router_chain=router_chain,
            destination_chains=destination_chains,
            default_chain=default_chain,
            verbose=True,
        )

        response = chain.run(question)

        # prompt = PromptTemplate(template=template, input_variables=["question"])

        # llm = VertexAI()
        # llm_chain = LLMChain(prompt=prompt, llm=llm)

        # med_llm = VertexAI(model_name="medpalm2@experimental")
        # med_llm_chain = LLMChain(prompt=prompt, llm=med_llm)

        # overall_chain = SimpleSequentialChain(
        #     chains=[llm_chain, med_llm_chain], verbose=True
        # )

        # response = overall_chain.run(question)

        web.header("Access-Control-Allow-Origin", "*")
        web.header("Content-Type", "application/json")

        return json.dumps({"question": question, "answer": response})


class redirect_manager:
    def GET(self):
        raise web.seeother("/static/")


class data_manager:
    def OPTIONS(self, id):
        web.header("Access-Control-Allow-Origin", "*")
        web.header("Access-Control-Allow-Methods", "*")
        web.header("Access-Control-Allow-Headers", "*")
        return "200 OK"

    def GET(self, id):
        new_result = {}

        pieces = id.split("/")
        while "" in pieces:
            pieces.remove("")

        if len(pieces) == 1:
            forms_ref = db.collection(pieces[0])
            forms = forms_ref.stream()
            new_result = {pieces[0]: []}

            for form in forms:
                new_result[pieces[0]].append(form.to_dict())
        else:
            doc_ref = db.collection(pieces[0]).document(pieces[1])
            doc = doc_ref.get()
            new_result = doc.to_dict()

        if new_result:
            web.header("Access-Control-Allow-Origin", "*")
            web.header("Content-Type", "application/json")
            return json.dumps(new_result)
        else:
            return web.notfound("Not found")

    def POST(self, id):
        pieces = id.split("/")
        while "" in pieces:
            pieces.remove("")

        data = json.loads(web.data())

        logging.info(json.dumps(data))

        db.collection(pieces[0]).document(data["id"]).set(data)

        web.header("Access-Control-Allow-Origin", "*")
        web.header("Content-Type", "application/json")
        return json.dumps(data)

    def PUT(self, id):
        pieces = id.split("/")
        while "" in pieces:
            pieces.remove("")

        data = json.loads(web.data())

        logging.info(json.dumps(data))

        db.collection(pieces[0]).document(data["id"]).set(data)

        pprint.pprint(data)

        web.header("Access-Control-Allow-Origin", "*")
        web.header("Content-Type", "application/json")
        return json.dumps(data)

    def DELETE(self, id):
        pieces = id.split("/")
        while "" in pieces:
            pieces.remove("")

        if len(pieces) > 1:
            db.collection(pieces[0]).document(pieces[1]).delete()

        web.header("Access-Control-Allow-Origin", "*")
        web.header("Access-Control-Allow-Methods", "*")
        return "200 OK"


class docs_manager:
    def OPTIONS(self, id):
        web.header("Access-Control-Allow-Origin", "*")
        web.header("Access-Control-Allow-Methods", "*")
        web.header("Access-Control-Allow-Headers", "*")
        return "200 OK"

    def POST(self, id):
        pieces = id.split("/")
        while "" in pieces:
            pieces.remove("")

        data = json.loads(web.data())

        # data = self.db.collection("projects").document(pieces[0]).get()

        generatedDevPlanDoc = self.generateSoftwareDevelopmentPlan(
            data["name"],
            "Software Development Plan",
            data["organs"][0],
            data["disease"],
        )

        data["docs"] = [
            {"name": "Software Development Plan", "content": generatedDevPlanDoc},
            {"name": "Software Architecture Document", "content": generatedDevPlanDoc},
            {"name": "Software Requirements Document", "content": generatedDevPlanDoc},
            {"name": "Software Verification Plan", "content": generatedDevPlanDoc},
        ]

        data["status"] = "Ready"

        db.collection("projects").document(pieces[0]).set(data)

        web.header("Access-Control-Allow-Origin", "*")
        web.header("Content-Type", "application/json")
        return json.dumps(data)

    def generateSoftwareDevelopmentPlan(self, name, docName, organ, disease):
        result = """
        <div class="reg_doc_title">{docname}</div>
        <table class="reg_doc_table">
          <tr>
            <td>Project: </td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Development Category</td>
            <td>New Product</td>
          </tr>
          <tr>
            <td>Document Originator</td>
            <td>Generated by AI</td>
          </tr>
          <tr>
            <td>Ensure appropriateness and completeness given the defined scope.</td>
            <td>Software Quality Management</td>
          </tr>
          <tr>
            <td>Ensure content is complete, correct, and aligned with program needs.</td>
            <td>Chief Engineer/Technical Lead</td>
          </tr>
        </table>
        <h1>1 Introduction</h1>
        <h2>1.1 Purpose</h2>
        <div class="reg_doc_paragraph">
          The purpose of this document is to establish a medical device Software Development Plan (SwDP) for conducting the activities appropriate to the scope, magnitude, and software safety classification for the project.
          Software safety classification shall be used to determine the software lifecycle activities to be applied for software development Note 1.
          Note 1 - If the activity is required only for class B or C it will be clearly identified in the section title, otherwise the activity is required for all classes (A, B, C).
        </div>
        <h2>1.2 Responsibility</h2>
        <div class="reg_doc_paragraph">
          The Software Lead for the project is responsible for this SwDP. 
          The Software Quality Management for the project is responsible of ensuring that Software Milestone Review being planned and conducted (section of Software Milestone Review Strategy). 
          Individual software engineers are responsible for adhering to this plan in the development of medical device software.
          The intended audiences of this document are the Device Development Team (DDT) team.
          This document shall be updated as development proceeds as appropriate.
        </div>
        <h2>1.3 Reference Document</h2>
        <div class="reg_doc_paragraph">
          No documents are referenced in this document.
        </div>
        <h2>1.4 Glossery and Definitions</h2>
        <div class="reg_doc_paragraph">
          No definitions have been added to this document.
        </div>
        <h1>2 Software Development Scope and Description</h1>
        <div>
          {scope}
        </div>
        <h1>3 Software Development Standards, Methods and Tools [C]</h1>
        <div>
          {standards}
        </div>
        <h1>4 Software Development Life Cycle</h1>
        <div>
          {lifecycle}
          <h2>4.1 Informed Third Parties</h2>
          <div class="reg_doc_paragraph">
            Certain partners (e.g. OEMs) require early notification of upcoming software releases so that their internal release documentation can be updated to include the expected Product Software Version. Such partners may want to evaluate if the new software requires additional validation on their side or not.
            When informing third parties, a memo that explains the release changes, planned testing strategy, and our recommendation if additional testing is required should be devised and provided.
            The following notifications (third party and assigned internal lead) is required for this product:

            No third parties are involved in this product.
          </div>
        </div>
        <h1>5 Software Risk Management Planning</h1>
        <div>
          {riskplanning}
        </div>
        <h1>6 Software Integration Plan [B, C]</h1>
        <div>
          {integrationplan}
        </div>
        <h1>7 Software Compatibility Plan</h1>
        <div>
          {compatibilityplan}
        </div>
        """
        prompt = "Generate a paragraph for a Software Development Plan for the FDA for a software product that helps diagnose {disease}. The paragraph should contain the Software Development Scope and Description and provide a comprehensive overview of the device features that are controlled by software. Highlight major or operationally significant software features.".format(
            disease=disease
        )

        generatedScope = predict_large_language_model(
            prompt_model, 0.2, 1024, 0.8, 40, prompt
        )

        prompt = "Generate a paragraph for a Software Development Plan for the FDA for a software product that helps diagnose {disease}. The paragraph should contain the Software Development Standards, Methods and Tools and include or reference technical standards, methods, and tools associated with the development of software items of class C if applicable. Use the following format: 'Technical Standards: Methods: Tools:'".format(
            disease=disease
        )

        generatedStandards = predict_large_language_model(
            prompt_model, 0.2, 1024, 0.8, 40, prompt
        )

        prompt = "Generate a paragraph for a Software Development Plan for the FDA for a software product that helps diagnose {disease}. The paragraph should contain the Software Development Life Cycle.".format(
            disease=disease
        )

        generatedLifecycle = predict_large_language_model(
            prompt_model, 0.2, 1024, 0.8, 40, prompt
        )

        prompt = "Generate a paragraph for a Software Development Plan for the FDA for a software product that helps diagnose {disease}. The paragraph should contain the Software Risk Management Planning. Include or reference software risk management plan to address a) the scope of the planned risk management activities, b) assignment of responsibilities and authorities, c) requirements for review of risk management activities, d) criteria for risk acceptability, e) verification activities, and f) activities related to collection and review of relevant production and post-production information. Include the management of risks relating to SOUP. Software safety classification is documented in Software Risk Analysis document.".format(
            disease=disease
        )

        generatedRiskPlanning = predict_large_language_model(
            prompt_model, 0.2, 1024, 0.8, 40, prompt
        )

        prompt = "Generate a paragraph for a Software Development Plan for the FDA for a software product that helps diagnose {disease}. The paragraph should contain the Software Integration Plan. Describe a plan to integrate the software units into software items (include SOUP) and/or software system. Software integration plan is used to assist integration testing. The approach to integration can range from non-incremental integration to any form of incremental integration.".format(
            disease=disease
        )

        generatedIntegrationPlan = predict_large_language_model(
            prompt_model, 0.2, 1024, 0.8, 40, prompt
        )

        prompt = "Generate a paragraph for a Software Development Plan for the FDA for a software product that helps diagnose {disease}. The paragraph should contain a Software Compatibility Plan that defines the strategy and plan for ensuring that software compatibility with fielded software/hardware components are in accordance with the overall compatibility strategy (refer to the DnDP for overall strategy). The Software Compatibility Plan is also used to plan for backward compatibility (including interoperability, hardware interfaces, upgradeability, etc.) with fielded software/hardware versions to ensure the released Software works seamlessly.".format(
            disease=disease
        )

        generatedCompatibilityPlan = predict_large_language_model(
            prompt_model, 0.2, 1024, 0.8, 40, prompt
        )

        return result.format(
            name=name,
            docname=docName,
            scope=generatedScope,
            standards=generatedStandards,
            lifecycle=generatedLifecycle,
            riskplanning=generatedRiskPlanning,
            integrationplan=generatedIntegrationPlan,
            compatibilityplan=generatedCompatibilityPlan,
        )


def predict_large_language_model(
    model_name: str,
    temperature: float,
    max_output_tokens: int,
    top_p: float,
    top_k: int,
    question: str,
):
    parameters = {
        "temperature": temperature,
        "max_output_tokens": max_output_tokens,
        "top_p": top_p,
        "top_k": top_k,
    }
    model = TextGenerationModel.from_pretrained(model_name)
    response = model.predict(question, **parameters)

    return response.text


if __name__ == "__main__":
    app.run()
