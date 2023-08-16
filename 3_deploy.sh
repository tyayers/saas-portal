cd service

gcloud config set project $PROJECT

# Give service user rights to call vertex AI
# export PROJECTNUMBER=$(gcloud projects list --filter="$(gcloud config get-value project)" --format="value(PROJECT_NUMBER)")
# gcloud projects add-iam-policy-binding $PROJECT --member="serviceAccount:$PROJECTNUMBER-compute@developer.gserviceaccount.com" --role='roles/aiplatform.serviceAgent'

# Build container image
# gcloud builds submit --tag "eu.gcr.io/$PROJECT/healthio"
gcloud builds submit --config=cloudbuild.yaml \
  --substitutions=_LOCATION="$LOCATION",_PROJECT="$PROJECT",_REPOSITORY="healthio-repository",_IMAGE="healthio" .

# Deploy image to Cloud Run with the correct service account
gcloud run deploy healthio --image $LOCATION-docker.pkg.dev/$PROJECT/healthio-repository/healthio \
    --platform managed --project $PROJECT \
    --min-instances=1 \
    --service-account=$SERVICE_ACCOUNT \
    --region $LOCATION --allow-unauthenticated \
    --set-env-vars GCLOUD_PROJECT="$PROJECT",PROMPT_MODEL="$PROMPT_MODEL",PROMPT_MODEL_MEDICAL="$PROMPT_MODEL_MEDICAL",CHAT_MODEL="$CHAT_MODEL",VERTEX_REGION="us-central1"

cd ..
