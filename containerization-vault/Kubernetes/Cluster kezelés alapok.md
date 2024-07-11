# Deployment létrehozása
A **Pod** egy vagy több konténer logikai csoportja. A konténerek osztozkodnak a tárhely és hálózati erőforrásokon. A **Deployment** az alatta lévő Pod-okat ellenőrzi, csekkolja a státuszukat, újraindítja a leállt konténereket.

Egy Service létrehozása, benne egy Pod egy konténerrel:
```
kubectl create deployment <Deployment név> --image=<Docker image ID> -- <parancs a futó konténernek>
```

Deployment-ek lekérdezése:
```
kubectl get deployments
```

Pod-ok lekérdezése:
```
kubectl get pods
```

Event-ek lekérdezése:
```
kubectl get events
```

`kubectl` konfiguráció lekérdezése:
```
kubectl config view
```

Konténer log lekérdezése:
```
kubectl logs <Pod ID>
```

# Service létrehozása
Alapesetben egy Pod csak a cluster-en belül, annak belső IP címen keresztül elérhető. A Service lesz a felelős a külső elérhetőségért.

Pod nyitása a külső hálózatra:
```
kubectl expose deployment <Pod-ot tartalmazó Deployment ID> --type=LoadBalancer --port=8080
```
A **LoadBalancer** flag mondja meg, hogy a Pod-ot a cluster-en kívülről akarjuk elérni.
A portnak azt a TCP port-ot kell megadni, ahol az applikáció kód várja a request-eket.

Service-ek lekérése:
```
kubectl get services
```

Applikáció indítása:
```
minikube service <Deployment ID>
```

# Egyéb lekérdezés
Pod-ok és Service-ek lekérdezése adott namespace-en belül:
```
kubectl get pod,svc -n <namespace név>
```
A cluster indításakor létrejönnek [alapértelmezett namespace-ek](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/#initial-namespaces), amikkel rászűrhetünk a K8s által létrehozott erőforrásokra.
# Leállítás
K8s erőforrások törlése:
```
kubectl delete service <Deployment ID>
kubectl delete deployment <Deployment ID>
```

Cluster leállítás és törlés:
```
minikube stop
minikube delete
```
# [Egyéb szolgáltatások bekapcsolása](https://kubernetes.io/docs/tutorials/hello-minikube/#enable-addons)