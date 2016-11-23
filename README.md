# DevCon16 Kubernetes Workshop

## Install minikube
https://github.com/kubernetes/minikube/releases/tag/v0.12.0

### Install kubectl
`curl -O https://storage.googleapis.com/kubernetes-release/release/v1.4.3/bin/linux/amd64/kubectl` for Linux
`curl -O https://storage.googleapis.com/kubernetes-release/release/v1.4.3/bin/darwin/amd64/kubectl` for Mac OS

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

### Check that kubectl is working
`kubectl version`

`kubectl get nodes`

### Scale deployments
```
kubectl get deployments
kubectl scale deployment debug --replicas=3
kubectl get deployments
```

### Check running instances of application
```
kubectl get pods
kubectl describe pod <pod name>
```

### Access logs of a pod
```
kubectl logs <pod name>
```

### Deploy the frontend application
```
kubectl create -f frontend/frontend-deployment.yaml
kubectl get deployments
kubectl get pods
kubectl logs <pod name>
kubectl port-forward <pod name> 8080
open http://localhost:8080/
```

### Deploy the backend application
```
kubectl create -f backend/backend-deployment.yaml
kubectl get deployments
kubectl get pods
kubectl logs <pod name>
kubectl port-forward <pod name> 3000
open http://localhost:8080/
```

### Create a service to loadbalance the deployed applications
```
kubectl create -f frontend/frontend-service.yaml
kubectl get services
kubectl create -f backend/backend-service.yaml
kubectl get services
```

### Access the frontend from outside the cluster
```
kubectl describe service frontend
open http://$(minikube ip):<nodeport>
```

### Deploy mongodb PetSet
```
kubectl create -f mongodb/mongodb-service.yaml
kubectl create -f mongodb/mongodb-petset.yaml
kubectl get services
kubectl get petsets
kubectl get pods
kubectl get pvc
open http://$(minikube ip):<nodeport>
```
### Scale all the things!
```
kubectl scale deployment frontend --replicas=5
kubectl scale deployment backend --replicas=3
```

### Do a almost-rolling update of the frontend (healthchecks missing!)
```
kubectl apply -f frontend/frontend-deployment2.yaml
kubectl get pods
```

### Deploy an ingress controller
```
kubectl create -f controller.yaml
kubectl create -f frontend/frontend-ingress.yaml
kubectl get ingresses
<edit /etc/hosts to resolve frontend.workshop to minkube ip>
kubectl describe service nginx-ingress-lb
open http://frontend.workshop:<nginx-ingress-lb nodeport>
```

### Stop minikube
```
minikube stop
```
