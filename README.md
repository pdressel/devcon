kubectl run -it debug --image=pdressel/devcon:debug /bin/bash
env
TOKEN=$(cat /var/run/secrets/kubernetes.io/serviceaccount/token)
curl -sSk -H "Authorization: Bearer $TOKEN" https://$KUBERNETES_SERVICE_HOST:$KUBERNETES_PORT_443_TCP_PORT/api/v1 | jq .
kubectl get pods
kubectl exec -it debug-<id> /bin/bash
kubectl scale deployment debug --replicas=3
kubectl get pods
kubectl kubectl scale deployment debug --replicas=1




#
minikube dashboard
