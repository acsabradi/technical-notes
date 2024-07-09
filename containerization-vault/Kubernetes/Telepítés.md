# `kubectl`
Cluster elérést segítő CLI tool.
https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/

# `minikube`
Cluster létrehozást + menedzselést segítő CLI tool.
https://minikube.sigs.k8s.io/docs/start/?arch=%2Fwindows%2Fx86-64%2Fstable%2F.exe+download

Mindkettő tool-t vegyük fel a PATH-ba.

> [!warning] 
> A minikube alapesetben a HyperV-t akarja driver-ként használni, de úgy nem működött. A minikube fórum szerint VPN beállítások okozhatják a hibát és a Docker driver megbízhatóbb ilyen szempontból. Ezzel elindult a cluster:
> `minikube start --driver=docker`
> https://minikube.sigs.k8s.io/docs/drivers/docker/