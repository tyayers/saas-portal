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
import vertexai
from vertexai.preview.language_models import ChatModel, InputOutputTextPair

urls = (
    "/assistant/chat",
    "assistant_manager",
    "/data(.*)",
    "data_manager",
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

        self.FillDocs(data)

        logging.info(json.dumps(data))

        self.db.collection(pieces[0]).document(data["id"]).set(data)

        pprint.pprint(data)

        web.header("Access-Control-Allow-Origin", "*")
        web.header("Content-Type", "application/json")
        return json.dumps(data)

    def FillDocs(self, data):
        if data["organ"].lower() == "liver":
            data["docs"] = {
                "fda": [
                    {
                        "name": "Documentation Level Evaluation (AI DRAFT)",
                        "content": '<iframe style="width: 100%; height: 100%;" src="https://docs.google.com/document/d/e/2PACX-1vSjwjAmUIX0mcMQdLUe0MCZXZWCiok-TmOL5Gib6fR_zuX9LtuGVnPw49uEIWjZGt7YNNkNV2UjijzW/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Description (AI DRAFT)",
                        "content": '<iframe style="width: 100%; height: 100%;" src="https://docs.google.com/document/d/e/2PACX-1vTRtsHntRn74cg-OQiB62m9n3RWpde0zLD9GvKhvXMb-wNVh5XZDfK8HPau_WClUIXP0Yq4XBgDB6Lt/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Risk Management File (AI DRAFT)",
                        "content": '<iframe style="width: 100%; height: 100%;" src="https://docs.google.com/document/d/e/2PACX-1vSjwjAmUIX0mcMQdLUe0MCZXZWCiok-TmOL5Gib6fR_zuX9LtuGVnPw49uEIWjZGt7YNNkNV2UjijzW/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Requirements Specification (AI DRAFT)",
                        "content": '<iframe style="width: 100%; height: 100%;" src="https://docs.google.com/document/d/e/2PACX-1vSjwjAmUIX0mcMQdLUe0MCZXZWCiok-TmOL5Gib6fR_zuX9LtuGVnPw49uEIWjZGt7YNNkNV2UjijzW/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Architecture Design (AI DRAFT)",
                        "content": '<iframe style="width: 100%; height: 100%;" src="https://docs.google.com/document/d/e/2PACX-1vSjwjAmUIX0mcMQdLUe0MCZXZWCiok-TmOL5Gib6fR_zuX9LtuGVnPw49uEIWjZGt7YNNkNV2UjijzW/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Design Specification (AI DRAFT)",
                        "content": '<iframe style="width: 100%; height: 100%;" src="https://docs.google.com/document/d/e/2PACX-1vSjwjAmUIX0mcMQdLUe0MCZXZWCiok-TmOL5Gib6fR_zuX9LtuGVnPw49uEIWjZGt7YNNkNV2UjijzW/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Configuration Management (AI DRAFT)",
                        "content": '<iframe style="width: 100%; height: 100%;" src="https://docs.google.com/document/d/e/2PACX-1vSjwjAmUIX0mcMQdLUe0MCZXZWCiok-TmOL5Gib6fR_zuX9LtuGVnPw49uEIWjZGt7YNNkNV2UjijzW/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Testing Specification (AI DRAFT)",
                        "content": '<iframe style="width: 100%; height: 100%;" src="https://docs.google.com/document/d/e/2PACX-1vSjwjAmUIX0mcMQdLUe0MCZXZWCiok-TmOL5Gib6fR_zuX9LtuGVnPw49uEIWjZGt7YNNkNV2UjijzW/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Version History (AI DRAFT)",
                        "content": '<iframe style="width: 100%; height: 100%;" src="https://docs.google.com/document/d/e/2PACX-1vSjwjAmUIX0mcMQdLUe0MCZXZWCiok-TmOL5Gib6fR_zuX9LtuGVnPw49uEIWjZGt7YNNkNV2UjijzW/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Unresolved Software Anomalies (AI DRAFT)",
                        "content": '<iframe style="width: 100%; height: 100%;" src="https://docs.google.com/document/d/e/2PACX-1vSjwjAmUIX0mcMQdLUe0MCZXZWCiok-TmOL5Gib6fR_zuX9LtuGVnPw49uEIWjZGt7YNNkNV2UjijzW/pub?embedded=true"></iframe>',
                    },
                ],
                "ema": [
                    {
                        "name": "Documentation Level Evaluation (AI DRAFT)",
                        "content": '<iframe style="width: 100%; height: 100%;" src="https://docs.google.com/document/d/e/2PACX-1vSjwjAmUIX0mcMQdLUe0MCZXZWCiok-TmOL5Gib6fR_zuX9LtuGVnPw49uEIWjZGt7YNNkNV2UjijzW/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Description (AI DRAFT)",
                        "content": '<iframe style="width: 100%; height: 100%;" src="https://docs.google.com/document/d/e/2PACX-1vTRtsHntRn74cg-OQiB62m9n3RWpde0zLD9GvKhvXMb-wNVh5XZDfK8HPau_WClUIXP0Yq4XBgDB6Lt/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Risk Management File (AI DRAFT)",
                        "content": '<iframe style="width: 100%; height: 100%;" src="https://docs.google.com/document/d/e/2PACX-1vSjwjAmUIX0mcMQdLUe0MCZXZWCiok-TmOL5Gib6fR_zuX9LtuGVnPw49uEIWjZGt7YNNkNV2UjijzW/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Requirements Specification (AI DRAFT)",
                        "content": '<iframe style="width: 100%; height: 100%;" src="https://docs.google.com/document/d/e/2PACX-1vSjwjAmUIX0mcMQdLUe0MCZXZWCiok-TmOL5Gib6fR_zuX9LtuGVnPw49uEIWjZGt7YNNkNV2UjijzW/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Architecture Design (AI DRAFT)",
                        "content": '<iframe style="width: 100%; height: 100%;" src="https://docs.google.com/document/d/e/2PACX-1vSjwjAmUIX0mcMQdLUe0MCZXZWCiok-TmOL5Gib6fR_zuX9LtuGVnPw49uEIWjZGt7YNNkNV2UjijzW/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Design Specification (AI DRAFT)",
                        "content": '<iframe style="width: 100%; height: 100%;" src="https://docs.google.com/document/d/e/2PACX-1vSjwjAmUIX0mcMQdLUe0MCZXZWCiok-TmOL5Gib6fR_zuX9LtuGVnPw49uEIWjZGt7YNNkNV2UjijzW/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Configuration Management (AI DRAFT)",
                        "content": '<iframe style="width: 100%; height: 100%;" src="https://docs.google.com/document/d/e/2PACX-1vSjwjAmUIX0mcMQdLUe0MCZXZWCiok-TmOL5Gib6fR_zuX9LtuGVnPw49uEIWjZGt7YNNkNV2UjijzW/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Testing Specification (AI DRAFT)",
                        "content": '<iframe style="width: 100%; height: 100%;" src="https://docs.google.com/document/d/e/2PACX-1vSjwjAmUIX0mcMQdLUe0MCZXZWCiok-TmOL5Gib6fR_zuX9LtuGVnPw49uEIWjZGt7YNNkNV2UjijzW/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Software Version History (AI DRAFT)",
                        "content": '<iframe style="width: 100%; height: 100%;" src="https://docs.google.com/document/d/e/2PACX-1vSjwjAmUIX0mcMQdLUe0MCZXZWCiok-TmOL5Gib6fR_zuX9LtuGVnPw49uEIWjZGt7YNNkNV2UjijzW/pub?embedded=true"></iframe>',
                    },
                    {
                        "name": "Unresolved Software Anomalies (AI DRAFT)",
                        "content": '<iframe style="width: 100%; height: 100%;" src="https://docs.google.com/document/d/e/2PACX-1vSjwjAmUIX0mcMQdLUe0MCZXZWCiok-TmOL5Gib6fR_zuX9LtuGVnPw49uEIWjZGt7YNNkNV2UjijzW/pub?embedded=true"></iframe>',
                    },
                ],
            }


class assistant_manager:
    def POST(self):
        inputData = {}
        question = ""
        if web.data():
            print("have web data")
            inputData = json.loads(web.data())
            question = inputData["question"]

        print("Calling vertex LLM model with question: " + question)

        answer = self.predict_large_language_model(
            "cloud32x", "chat-bison@001", 0.2, 256, 0.8, 40, question, "us-central1"
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
        vertexai.init(project=project_id, location=location)

        chat_model = ChatModel.from_pretrained(model_name)
        parameters = {
            "temperature": temperature,
            "max_output_tokens": max_output_tokens,
            "top_p": top_p,
            "top_k": top_k,
        }

        chat = chat_model.start_chat(
            context="""A data scientist who wants to create new medical imaging AI models.""",
            examples=[
                InputOutputTextPair(
                    input_text="""what is the best AI model approach for recognizing liver lesions?""",
                    output_text="""AI can also be used to predict complications of liver cirrhosis. Marozas et al. used US elastography and blood tests as training data for AI models and discriminated cases with pressure differences between the portal vein and hepatic vein.""",
                )
            ],
        )
        response = chat.send_message(question, **parameters)
        return response.text


class redirect_manager:
    def GET(self):
        raise web.seeother("/static/")


if __name__ == "__main__":
    app.run()
