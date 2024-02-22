```go
var i int = 42
var f float64 = float64(i)
var u uint = uint(f)
```

Rövidített deklarációval:
```go
i := 42
f := float64(i)
u := uint(f)
```
Itt nem szükséges az explicit konverzió, mert a *[[Type Inference|type inference]]* a numerikus konstans pontossága alapján beállítja a típusokat.

