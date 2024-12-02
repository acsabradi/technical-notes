Egy részletesebb leírás: [Mi az IP, TCP/IP](https://www.szabilinux.hu/ip/)

Forrás:
- [Hálózat 1 (alapvető ismeretek, ip cím, netmask, stb)](https://www.youtube.com/watch?v=x75rST1j2Oc)

Kettő verzió: IPv4 és IPv6

Elérhetőség szempontjából:
- publikus
	- interneten keresztül elérhető
	- egyedinek kell lennie
	- minden gépnek más
- privát
	- belső hálózatban használjuk
	- belső hálózatban egyedinek kell lennie
	- router-en keresztül érik el az internetet
	- privát IP címek átfordulnak publikussá internet elérés esetén

Egy hálózatban lévő gépek csak egymással tudnak kommunikálni.

A **hálózati maszk (netmask)** mondja meg, hogy az IP címnek mely része azonosítja a hálózatot és melyik a gépet.

Példa:
- IP cím: 192.168.2.1
- Netmask: 255.255.255.0
	- Alternatív jelölés: MSB-től számítva mennyi bitet használunk fel a hálózat azonosításhoz?
	- Itt ez az érték 24.
	- Ebből jön az IP cím teljes jelölése: 192.168.2.1/24
- Bitwise AND adja meg a hálózatot: 192.168.2.0
- A maradék bitek pedig a gépet: 0.0.0.1
- **Foglalt címek:**
	- A hálózat első címe mert az azonosítja a hálózatot: 192.168.2.0
	- A hálózat utolsó címe broadcast-nek van fenttartva: 192.168.2.255
	- A gépek saját magukra mutató címe (**localhost**): `127.*.*.*`

Windows: `ipconfig`
Linux: `ifconfig`

![[two-connected-network]]
Egy switch alá tartozó gépek látják egymást, mert egyezik a hálózati azonosítójuk. Viszont a kettő switch hiába van összekötve, az egyik csoport nem látja a másikat, mert nem egyezik a hálózati azonosítójuk.