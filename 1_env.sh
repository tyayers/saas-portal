export PROJECT=$(gcloud config get-value project)
export LOCATION=europe-west1

export CLIENT_MODE=production

export PROJECT_NUMBER=$(gcloud projects list --filter="$(gcloud config get-value project)" --format="value(PROJECT_NUMBER)")
export SERVICE_ACCOUNT=$PROJECT_NUMBER-compute@developer.gserviceaccount.com
export PROMPT_MODEL=text-bison
# export PROMPT_MODEL_MEDICAL=medpalm2@experimental
export PROMPT_MODEL_MEDICAL=text-bison
export CHAT_MODEL=chat-bison