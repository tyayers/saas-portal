export PROJECT=$(gcloud config get-value project)
export LOCATION=europe-west1

export PROJECT_NUMBER=$(gcloud projects list --filter="$(gcloud config get-value project)" --format="value(PROJECT_NUMBER)")
export SERVICE_ACCOUNT=$PROJECT_NUMBER-compute@developer.gserviceaccount.com