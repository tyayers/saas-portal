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
    --region $LOCATION --allow-unauthenticated \
    --set-env-vars GCLOUD_PROJECT="$PROJECT"

cd ..