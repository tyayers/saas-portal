import os
import web
import requests
import json
import time
import logging
import google.auth
import vertexai
from vertexai.preview.language_models import ChatModel, InputOutputTextPair

urls = ("/assistant/chat", "assistant_manager")
app = web.application(urls, globals())


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


if __name__ == "__main__":
    app.run()
