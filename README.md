# saas-portal-template

This is a simple SaaS portal web project in style of Gmail or other material styled portals.

To build and deploy to Google Cloud, make sure you have `gcloud` installed, authorized and set to the desired project. Then execute these two scripts to build and deploy the solution.

```bash
# This builds and copies the client to the service directory for deployment
./1_build.sh

# This deploys the service to Google Cloud Run, the client will be available at https://CLOUD_RUN_URL/static
./2._deploy.sh
```
