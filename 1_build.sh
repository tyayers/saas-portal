export PROJECT=$(gcloud config get-value project)
export LOCATION=europe-west1

cd ./client
npm run build
rm -r -f "../service/static"
mkdir "../service/static"
cp -r "dist/." "../service/static"

cd ..