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

### Install kubectl
`curl -O https://storage.googleapis.com/kubernetes-release/release/v1.4.3/bin/linux/amd64/kubectl` for linux
`curl -O https://storage.googleapis.com/kubernetes-release/release/v1.4.3/bin/darwin/amd64/kubectl` for mac os

### check that kubectl is working
`kubectl version`
`kubectl get nodes`
