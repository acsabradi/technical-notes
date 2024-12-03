Forrás:
- [DHCP Explained - Dynamic Host Configuration Protocol](https://www.youtube.com/watch?v=e6-TaH5bkjo)

**Dynamic Host Configuration Protocol**

A DHPC szerver automatikus ad a gépnek:
- IP címet
- subnet mask-ot
- default gateway-t
- DNS szervert

Általában egy dedikált szerver vagy a router a DHCP szerver.

**Scope**: A DHCP szerver ezeket az IP címeket tudja kiosztani.
**Lease**: Egy kiosztott IP cím ennyi ideig maradhat egy gépnél. Így a szerver nem fog kifogyni kiosztható IP címekből. A gépek új lease-t kérhetnek, amikor az aktuális lejár.
**Reservation**: A [[MAC cím|MAC címével]] azonosított gép mindig ugyanazt az IP címet kapja a DHCP-től.