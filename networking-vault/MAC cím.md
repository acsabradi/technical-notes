Forrás:
- [MAC Address Explained](https://www.youtube.com/watch?v=TIiQiw7fpsU)

**Media Access Controll (physical or hardware address)**

Hálózati eszközök (network interface card - NIC) egyedi azonosítója.

6 byte-os hexadecimális számként jelöljük.

Első 3 byte azonosítja a NIC gyártóját. A másik 3 byte azonosítja a NIC-et a gyártón belül.

![[mac-representation-by-os.png]]

Az IP cím adja meg a NIC helyét, a MAC azonosítja azt.

Egy gépnek tudnia kell annak a gépnek a MAC címét, amivel kommunikálni szeretne. Ha a két gép egy hálózaton van, akkor a kezdeményező gép le tudja kérni a másik gép MAC címét egy [[ARP|Address Resolution Protocol (ARP) ]]broadcast üzenettel. Ehhez tudnia kell a másik gép IP címét.

Ha a két gép külön hálózatokon van, akkor a kezdeményező gép először detektálja, hogy a másik gép IP címe egy másik hálózatra mutat. Böngészőben URL megadása esetén a [[DNS|DNS-től]] kapja meg a másik IP címet. Mivel a másik gép másik hálózaton van, a kezdeményező gép a [[Default gateway|default gateway]] (router) MAC címét szerzi meg ARP-val és neki küldi az adatot. A router [[Routing|kiszámítja a legjobb utat]] a másik géphez, majd ARP-vel lekérdi a következő router MAC-jét. Ez így folytatódik amíg az adat el nem éri a másik gépet. 

![[find-server-via-arp.png]]