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
from vertexai.preview.language_models import ChatModel, InputOutputTextPair, TextGenerationModel
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

chat = ChatVertexAI()
vertexai.init(project=os.environ.get("GCLOUD_PROJECT"), location=os.environ.get("ASSISTANT_MODEL_REGION"))

language_client = language_v1.LanguageServiceClient()

urls = (
    "/assistant/chat",
    "chat_manager",
    "/assistant/prompt",
    "prompt_manager",
    "/assistant/langchain",
    "langchain_manager",
    "/data(.*)",
    "data_manager",
    "/language/entities",
    "language_manager",
    "/",
    "redirect_manager"
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

class language_manager:
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
            print(f"Representative name for the entity: {entity.name}")

            # Get entity type, e.g. PERSON, LOCATION, ADDRESS, NUMBER, et al
            print(f"Entity type: {language_v1.Entity.Type(entity.type_).name}")

            # Get the salience score associated with the entity in the [0, 1.0] range
            print(f"Salience score: {entity.salience}")

            results.append({
                "name": entity.name,
                "type": entity.type,
                "salience": entity.salience
            })


        web.header("Access-Control-Allow-Origin", "*")
        web.header("Content-Type", "application/json")

        return json.dumps({"description": description, "entities": results})


class prompt_manager:
    def POST(self):
        inputData = {}
        question = ""
        model = os.environ.get("PROMPT_MODEL")
        if web.data():
            print("have web data")
            inputData = json.loads(web.data())
            question = inputData["question"]
            if "model" in inputData:
                model = inputData["model"]

        print("Calling vertex LLM model with question: " + question)

        answer = self.predict_large_language_model(
            model,
            float(os.environ.get("ASSISTANT_TEMPERATURE")),
            int(os.environ.get("ASSISTANT_MAX_OUTPUT_TOKENS")),
            float(os.environ.get("ASSISTANT_TOP_P")),
            int(os.environ.get("ASSISTANT_TOP_K")),
            question,
            os.environ.get("ASSISTANT_MODEL_REGION"),
        )

        web.header("Access-Control-Allow-Origin", "*")
        web.header("Content-Type", "application/json")

        return json.dumps({"question": question, "answer": answer})

    def predict_large_language_model(
        self,
        model_name: str,
        temperature: float,
        max_output_tokens: int,
        top_p: float,
        top_k: int,
        question: str,
        location: str,
    ):
        parameters = {
            "temperature": temperature,
            "max_output_tokens": max_output_tokens,
            "top_p": top_p,
            "top_k": top_k
        }
        model = TextGenerationModel.from_pretrained(model_name)
        response = model.predict(
            question,
            **parameters
        )

        return response.text

class chat_manager:
    def POST(self):
        inputData = {}
        question = ""
        model = os.environ.get("ASSISTANT_MODEL")
        if web.data():
            print("have web data")
            inputData = json.loads(web.data())
            question = inputData["question"]
            if "model" in inputData:
                model = inputData["model"]

        print("Calling vertex LLM model with question: " + question)

        answer = self.predict_large_language_model(
            os.environ.get("GCLOUD_PROJECT"),
            model,
            float(os.environ.get("ASSISTANT_TEMPERATURE")),
            int(os.environ.get("ASSISTANT_MAX_OUTPUT_TOKENS")),
            float(os.environ.get("ASSISTANT_TOP_P")),
            int(os.environ.get("ASSISTANT_TOP_K")),
            question,
            os.environ.get("ASSISTANT_MODEL_REGION"),
        )

        web.header("Access-Control-Allow-Origin", "*")
        web.header("Content-Type", "application/json")

        return json.dumps({"question": question, "answer": answer})

    def predict_large_language_model(
        self,
        project_id: str,
        model_name: str,
        temperature: float,
        max_output_tokens: int,
        top_p: float,
        top_k: int,
        question: str,
        location: str,
    ):
        chat_model = ChatModel.from_pretrained(model_name)
        parameters = {
            "temperature": temperature,
            "max_output_tokens": max_output_tokens,
            "top_p": top_p,
            "top_k": top_k,
        }

        chat = chat_model.start_chat(
            context=os.environ.get("ASSISTANT_CONTEXT"),
            examples=[
                InputOutputTextPair(
                    input_text=os.environ.get("ASSISTANT_EXAMPLE_QUESTION1"),
                    output_text=os.environ.get("ASSISTANT_EXAMPLE_ANSWER1"),
                )
            ],
        )
        response = chat.send_message(question, **parameters)
        return response.text

class langchain_manager:
    def POST(self):
        inputData = {}
        question = ""
        if web.data():
            print("have web data")
            inputData = json.loads(web.data())
            question = inputData["question"]

        print("Calling vertex LLM model with question: " + question)

        template = """Question: {question}

        Answer: Let's think step by step."""

        prompt = PromptTemplate(template=template, input_variables=["question"])
        llm = VertexAI()
        llm_chain = LLMChain(prompt=prompt, llm=llm)

        med_llm = VertexAI(model_name="medpalm2@experimental")
        med_llm_chain = LLMChain(prompt=prompt, llm=med_llm)

        overall_chain = SimpleSequentialChain(chains=[llm_chain, med_llm_chain], verbose=True)

        response = overall_chain.run(question)

        # response = llm_chain.run(question)

        web.header("Access-Control-Allow-Origin", "*")
        web.header("Content-Type", "application/json")

        return json.dumps({"question": question, "answer": response})

        # messages = [
        #     SystemMessage(
        #         content="You are a helpful assistant for healthcare and data science related questions."
        #     ),
        #     HumanMessage(
        #         content=question
        #     ),
        # ]
        
        # response = chat(messages)

        # web.header("Access-Control-Allow-Origin", "*")
        # web.header("Content-Type", "application/json")

        # return json.dumps({"question": question, "answer": response.content})

class redirect_manager:
    def GET(self):
        raise web.seeother("/static/")

class data_manager:
    db = firestore.client()

    def GET(self, id):
        new_result = {}

        pieces = id.split("/")
        while "" in pieces:
            pieces.remove("")

        if len(pieces) == 1:
            forms_ref = self.db.collection(pieces[0])
            forms = forms_ref.stream()
            new_result = {pieces[0]: []}

            for form in forms:
                new_result[pieces[0]].append(form.to_dict())
        else:
            doc_ref = self.db.collection(pieces[0]).document(pieces[1])
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

        if "organ" in data:
            self.FillDocs(data)

        logging.info(json.dumps(data))

        self.db.collection(pieces[0]).document(data["id"]).set(data)

        pprint.pprint(data)

        web.header("Access-Control-Allow-Origin", "*")
        web.header("Content-Type", "application/json")
        return json.dumps(data)

    def PUT(self, id):
        pieces = id.split("/")
        while "" in pieces:
            pieces.remove("")

        data = json.loads(web.data())

        logging.info(json.dumps(data))

        self.db.collection(pieces[0]).document(data["id"]).set(data)

        pprint.pprint(data)

        web.header("Access-Control-Allow-Origin", "*")
        web.header("Content-Type", "application/json")
        return json.dumps(data)

    # Delets a note
    def DELETE(self, id):
        pieces = id.split("/")
        while "" in pieces:
            pieces.remove("")

        if len(pieces) > 1:
            self.db.collection("notes").document(pieces[1]).delete()

        return "200 OK"

    def FillDocs(self, data):
        if "liver" in data["organ"].lower():
            data["docs"] = {
                "fda": [
                    {
                        "name": "Documentation Level Evaluation (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vSjwjAmUIX0mcMQdLUe0MCZXZWCiok-TmOL5Gib6fR_zuX9LtuGVnPw49uEIWjZGt7YNNkNV2UjijzW/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Description (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vTRtsHntRn74cg-OQiB62m9n3RWpde0zLD9GvKhvXMb-wNVh5XZDfK8HPau_WClUIXP0Yq4XBgDB6Lt/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Risk Management File (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vRBCNKsb1I0Q8mlbB6VrkTCWy1Rqj-PJYBwHLNiBGCQE1uuxlKUFqkvdBcrxCRKJFyiMUNU1yIcsY_C/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Requirements Specification (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vRfw6rIKBEO8EfpiF04MX9VmqE1jrmiRMaadciSdSGbdSQNchZ4UB5WLKVhI-jUc39leSn9Lev8BtJg/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Architecture Design (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vSQOmZqEbwsUQNeuL05ur12pruvh0IIKkO-p4HZgEBaJVsU9SO8AiPExRspDa6ZFlpP0Bji2EHE48cM/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Design Specification (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vTtd1jJFbIGeXd07dfVMWyis1nAArwgpdaUCydjHZg1n_SWlT-IuNcwStllS3OBI9je5MRbratXnZlC/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Configuration Management (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vQpYlVkoC3s9vVWQtA-5yCH4ra9IwOEJt3691E9YogJGC5qiQnI3HqsX_fUU0wdq34ObYJnet6k299l/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Testing Specification (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vQ0-x8hKjpxr6kqrLkojdRHI9IlKVkIubi0RJwRvwJJ7C5jvUmmImP7K7jjSwcbapbHDCcnV6RpJhW9/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Version History (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vSG1eHdVdGDXgogYr5CCXQccjF5G2YUD04-6LsNBT1BtcfOEEY-93wo6AiUKnv0iwmZvDaaJDs9YKo_/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Unresolved Software Anomalies (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vRYnsTDd_3cu3aZ3VgRYGg75_3sVdPhWjRZAlj2z0AoUjXE8nK6gNZ1Y-AF0hpD6rwya8T7toAk_WzG/pub?embedded=true"></iframe>',
                    },
                ],
                "ema": [
                    {
                        "name": "Documentation Level Evaluation (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vSjwjAmUIX0mcMQdLUe0MCZXZWCiok-TmOL5Gib6fR_zuX9LtuGVnPw49uEIWjZGt7YNNkNV2UjijzW/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Description (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vTRtsHntRn74cg-OQiB62m9n3RWpde0zLD9GvKhvXMb-wNVh5XZDfK8HPau_WClUIXP0Yq4XBgDB6Lt/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Risk Management File (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vRBCNKsb1I0Q8mlbB6VrkTCWy1Rqj-PJYBwHLNiBGCQE1uuxlKUFqkvdBcrxCRKJFyiMUNU1yIcsY_C/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Requirements Specification (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vRfw6rIKBEO8EfpiF04MX9VmqE1jrmiRMaadciSdSGbdSQNchZ4UB5WLKVhI-jUc39leSn9Lev8BtJg/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Architecture Design (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vSQOmZqEbwsUQNeuL05ur12pruvh0IIKkO-p4HZgEBaJVsU9SO8AiPExRspDa6ZFlpP0Bji2EHE48cM/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Design Specification (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vTtd1jJFbIGeXd07dfVMWyis1nAArwgpdaUCydjHZg1n_SWlT-IuNcwStllS3OBI9je5MRbratXnZlC/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Configuration Management (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vQpYlVkoC3s9vVWQtA-5yCH4ra9IwOEJt3691E9YogJGC5qiQnI3HqsX_fUU0wdq34ObYJnet6k299l/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Testing Specification (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vQ0-x8hKjpxr6kqrLkojdRHI9IlKVkIubi0RJwRvwJJ7C5jvUmmImP7K7jjSwcbapbHDCcnV6RpJhW9/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Version History (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vSG1eHdVdGDXgogYr5CCXQccjF5G2YUD04-6LsNBT1BtcfOEEY-93wo6AiUKnv0iwmZvDaaJDs9YKo_/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Unresolved Software Anomalies (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vRYnsTDd_3cu3aZ3VgRYGg75_3sVdPhWjRZAlj2z0AoUjXE8nK6gNZ1Y-AF0hpD6rwya8T7toAk_WzG/pub?embedded=true"></iframe>',
                    },
                ],
            }
        elif "lung" in data["organ"].lower():
            data["docs"] = {
                "fda": [
                    {
                        "name": "Documentation Level Evaluation (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vQYj1NkMglx6lubzcHaLOBg0Le-8MkkD_ImUPes2ImpLP-_KobNKuDUF4CgbdOtnQ6Owlr6cjphsq5g/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Description (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vRfFtDge6qHQIPdDo8XhRgkern0Z2sQKV_l8S5a-7sM0aw3vFZX8AYRn_LBUJau579U20DQYcVFCE-G/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Risk Management File (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vTdK2PUdEJmNwWl8MgT1eV-dixM8GDx0hNX9br-BUGttjJNDVJuN7DGPT8507ZqFw6HG4Yj6_MYXzTg/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Requirements Specification (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vQmRBIPzsxZBC09vdcQ0gatpJa4s2Vqqo8yXEGPbRbiRL6W0K-CRiyWtudx1642Vl6ykebvlh8nf-qY/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Architecture Design (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vQCF-mg3MTxawqxKc7s36xAkCrf8sXetwNxnD1H1fGqLRKOBiawiTeewvcWIquaCDat5tbFANldv-md/pub?embedded=true"></iframe>',
                    },
                ],
                "ema": [
                    {
                        "name": "Documentation Level Evaluation (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vSjwjAmUIX0mcMQdLUe0MCZXZWCiok-TmOL5Gib6fR_zuX9LtuGVnPw49uEIWjZGt7YNNkNV2UjijzW/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Description (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vTRtsHntRn74cg-OQiB62m9n3RWpde0zLD9GvKhvXMb-wNVh5XZDfK8HPau_WClUIXP0Yq4XBgDB6Lt/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Risk Management File (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vRBCNKsb1I0Q8mlbB6VrkTCWy1Rqj-PJYBwHLNiBGCQE1uuxlKUFqkvdBcrxCRKJFyiMUNU1yIcsY_C/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Requirements Specification (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vRfw6rIKBEO8EfpiF04MX9VmqE1jrmiRMaadciSdSGbdSQNchZ4UB5WLKVhI-jUc39leSn9Lev8BtJg/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Architecture Design (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vSQOmZqEbwsUQNeuL05ur12pruvh0IIKkO-p4HZgEBaJVsU9SO8AiPExRspDa6ZFlpP0Bji2EHE48cM/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Design Specification (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vTtd1jJFbIGeXd07dfVMWyis1nAArwgpdaUCydjHZg1n_SWlT-IuNcwStllS3OBI9je5MRbratXnZlC/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Configuration Management (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vQpYlVkoC3s9vVWQtA-5yCH4ra9IwOEJt3691E9YogJGC5qiQnI3HqsX_fUU0wdq34ObYJnet6k299l/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Testing Specification (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vQ0-x8hKjpxr6kqrLkojdRHI9IlKVkIubi0RJwRvwJJ7C5jvUmmImP7K7jjSwcbapbHDCcnV6RpJhW9/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Version History (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vSG1eHdVdGDXgogYr5CCXQccjF5G2YUD04-6LsNBT1BtcfOEEY-93wo6AiUKnv0iwmZvDaaJDs9YKo_/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Unresolved Software Anomalies (AI DRAFT)",
                        "content": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vRYnsTDd_3cu3aZ3VgRYGg75_3sVdPhWjRZAlj2z0AoUjXE8nK6gNZ1Y-AF0hpD6rwya8T7toAk_WzG/pub?embedded=true"></iframe>',
                    },
                ],
            }

if __name__ == "__main__":
    app.run()
