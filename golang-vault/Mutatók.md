Egy integer memória címénak tárolása:
```go
var p *int
```
A default értéke `nil`.

A `&` operátor az operandusára mutató pointer-t ad vissza:
```go
i := 42
p = &i
```

A `*` operátor a pointer-ben tárolt memória cím alatt lévő értéket adja vissza  (*dereferencing*):
```go
fmt.Println(*p) // 42
```

De értéket módosítani is lehet:
```go
*p = 21
fmt.Println(*p) // 21
```

[[Pointer-ek és struct-ok]]