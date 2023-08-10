export PROJECT=$(gcloud config get-value project)
export LOCATION=europe-west1

cd service

# Give service user rights to call vertex AI
export PROJECTNUMBER=$(gcloud projects list --filter="$(gcloud config get-value project)" --format="value(PROJECT_NUMBER)")
gcloud projects add-iam-policy-binding $PROJECT --member="serviceAccount:$PROJECTNUMBER-compute@developer.gserviceaccount.com" --role='roles/aiplatform.serviceAgent'

# Build container image
gcloud builds submit --tag "eu.gcr.io/$PROJECT/healthio"

# Deploy image to Cloud Run with the correct service account
gcloud run deploy healthio --image eu.gcr.io/$PROJECT/healthio \
    --platform managed --project $PROJECT \
    --min-instances=1 \
    --region $LOCATION --allow-unauthenticated \
    --set-env-vars GCLOUD_PROJECT="$PROJECT",PROMPT_MODEL="text-bison@001",CHAT_MODEL="chat-bison",ASSISTANT_MODEL_REGION="us-central1",ASSISTANT_TEMPERATURE="0.2",ASSISTANT_MAX_OUTPUT_TOKENS="256",ASSISTANT_TOP_P="0.8",ASSISTANT_TOP_K="40",ASSISTANT_CONTEXT="you are an assistant to medical data scientists who can answer questions about medical imaging and general topics.",ASSISTANT_EXAMPLE_QUESTION1="what are the best AI models used today for medical imaging disease detection?",ASSISTANT_EXAMPLE_ANSWER1="Convolutional Neural Networks (CNNs) and Support Vector Machines (SVMs) are the best models for medical imaging today."

cd ..