Explicit típus nélküli deklaráció (`:=` és `var x = 1`) során a típus az adott érték alapján kerül beállításra.

Típusos változó átadásakor az új változó típusa ugyanaz lesz:
```go
var i int
j := i // j integer lesz
```

Numerikus konstant esetén a konstant pontossága határozza meg a típust:
```go
i := 42           // int
f := 3.142        // float64
g := 0.867 + 0.5i // complex128
```