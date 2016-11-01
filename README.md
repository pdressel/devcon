# DevCon16 Kubernetes Workshop

## Start a cluster
`minikube start`

## Run a debug container
```
kubectl run -it debug --image=pdressel/devcon:debug /bin/bash
env
TOKEN=$(cat /var/run/secrets/kubernetes.io/serviceaccount/token)
curl -sSk -H "Authorization: Bearer $TOKEN" https://$KUBERNETES_SERVICE_HOST:$KUBERNETES_PORT_443_TCP_PORT/api/v1 | jq .
```
### See what is running in the cluster
```
kubectl get pods
```
### View the dashboard
`minikube dashboard`
