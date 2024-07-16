# Pod
A **Pod** egy vagy több konténer logikai csoportja. A konténerek osztozkodnak a tárhely és hálózati erőforrásokon (cluster-en belül egyedi IP cím, port használat). 
**Deployment** létrehozásával hozunk létre pod-ot/pod-okat (nem indítunk közvetlenül konténert). A Deployment az alatta lévő Pod-okat ellenőrzi, csekkolja a státuszukat, újraindítja a leállt konténereket.
Amíg fut, addig minden Pod egy-egy Node-hoz van kötve. Node meghibásodás esetén a kiesővel megegyező Pod indul el egy másik elérhető Node-on a cluster-ban.
![[pods-overview.png]]
# Node
Cluster-től függően a node lehet fizikai vagy virtuális gép. A node-okat és a pod-ok ütemezését a **control plane** irányítja. A control plane az ütemezésnél figyelembe veszi a node-ok státuszát (pl. szabad tárhely, memória).
Minden node megtalálható:
- **Kubelet:** Control plane és node közötti kommunikáció, pod-ok és konténerek menedzselése
- **Konténer runtime**: Pl. Docker. Image letöltése registry-ből, konténer futtatás. 
![[node-overview.png]]