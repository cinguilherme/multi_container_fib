### multicont repo - the over the top over engineered application to calculate fibbonaci numbers

The main purpose for this repo is to be a template of sorts to have a local development enviroment using kubernetes to facilitate to move to production when the idea is matured, since the work to what ever runs in this enviroment into a actual cloud is not all that much work.


### Requirements development
- Docker Desktop
- Shell
- Kubernetes for the Docker Desktop
- any app in the repo has to be properly containerized and needs to have a image repo available for storing the image.


### Dockerhub in this case
- if using dockerhub as the repo for the images, no need to change any image paths in the k8s directory


### Actual production path completely disabled
however there is a sligth half baked travis ci configured to deploy the thing into a GKE, but its disabled as previously mentioned.