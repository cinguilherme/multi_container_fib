SHA=$(git rev-parse HEAD)

docker build -t cinguilherme/multic-worker:latest -t cinguilherme/multic-worker:$SHA -f ./worker/Dockerfile ./worker
docker push cinguilherme/multic-worker:$SHA
docker push cinguilherme/multic-worker:latest


docker build -t cinguilherme/multic-server:latest -t cinguilherme/multic-server:$SHA -f ./server/Dockerfile ./server
docker push cinguilherme/multic-server:$SHA
docker push cinguilherme/multic-server:latest


kubectl apply -f k8s

kubectl set image deployments/server-deployment server=cinguilherme/multic-server:$SHA
kubectl set image deployments/worker-deployment worker=cinguilherme/multic-worker:$SHA