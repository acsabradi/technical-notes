`ubuntu` konténer interaktív futtatása és azon belül `bash` indítása:

```bash
docker run -i -t ubuntu /bin/bash
```

1. Ha `ubuntu` nincs a lokális cache-ben, akkor image letöltése repóból. Implicit parancs: `docker pull ubuntu`
2. Új konténer jön létre. Implicit parancs: `docker container create`
3. A konténerre rákerül egy utolsó írható-olvasható réteg, hogy a futó konténernek legyen egy saját fájlrendszere
4. Egy hálózati interfészen keresztül a konténer csatlakoztatása a hálózathoz és IP cím kiosztása. Alapesetben a konténerek elérik a külső hálózatot a hoszton keresztül.
5. Kontéren és `bash` indítása. A `bash`-t az `-i -t` kapcsolók miatt érjük el: interaktív konténerfuttatás és konténer csatolása a terminálra

`exit` parancsra kilépünk a `bash`-ből, a konténer leáll, de nem törlődik, szükség esetén újraindítható.