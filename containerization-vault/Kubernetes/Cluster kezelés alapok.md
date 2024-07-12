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
Alapesetben egy Pod csak a cluster-en belül, annak belső IP címen keresztül elérhető, azon keresztül kommunikálnak az egy clusterben lévő pod-ok. A Service lesz a felelős a külső elérhetőségért.

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
# Cluster kommunikáció Service nélkül
A `kubectl proxy` paranccsal létrehozunk egy proxy-t, ami továbbítja a kommunikációt a cluster privát hálózatának. Egy másik terminálból indítsuk el a proxy-t, sikeres indítás esetén visszakapjuk az IP címet ahol a proxy hallgatózik. Ezen az IP címen elérhetjük a Kubernetes API-t.

K8s verzió lekérdezése:
```powershell
Invoke-WebRequest http://localhost:8001/version
```

Az API-n keresztül lekérhetjük akub többi endpoint-ot is:
```powershell
$apiDescription = Invoke-WebRequest http://localhost:8001/
$endpoints = $apiDescription.Content | ConvertFrom-Json
$endpoints.paths
```

A szerver minden pod-hoz létrehoz egy-egy endpoint-ot, ami szintén elérhető a proxy-n keresztül.

Először megszerezzük a pod nevét:
```powershell
$podName = kubectl get pods -o go-template --template '{{range .items}}{{.metadata.name}}{{\"\n\"}}{{end}}'
```

A template szintaxis [Go Template Engine](https://pkg.go.dev/text/template) szerint működik. Egy JSON kimenetű lekérdezéssel megnézhetjük, hogy pontosan milyen elemeken iterál a template:
```powershell
kubectl get pods -o json
```

> [!warning]
> A [hivatalos K8s dokumentáció](https://kubernetes.io/docs/tutorials/kubernetes-basics/deploy-app/deploy-intro/) példakódjai Bash-re lettek írva. PowerShell-ben az idézőjelek elé escape karaktert kell tenni.

Végül a proxy-n keresztül hozzáférünk a pod-hoz:
```powershell
Invoke-WebRequest http://localhost:8001/api/v1/namespaces/default/pods/$($podName):8080/proxy/
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