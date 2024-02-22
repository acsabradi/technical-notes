Deklarálás:
```go
package main

import "fmt"

var c, python, java bool // package szintű változók

func main() {
	var i int // függvény szintű változó
	fmt.Println(i, c, python, java)
}
```

Egyszerre lehet deklarálni és inicializálni:
```go
package main

import "fmt"

var i, j int = 1, 2

func main() {
	var c, python, java = true, false, "no!" // a típus elhagyható
	fmt.Println(i, j, c, python, java)
}
```

Rövid deklaráció + inicializálás:
```go
k := 3
c, python, java := true, false, "no!"
```
Mivel a függvényeken kívül minden sornak keyword-el kell kezdődnie, ezért a rövid deklarálás ==csak függvényben lehetséges==.

Az `import`-hoz hasonlóan a package szintű változókat is lehet blokkosítani:
```go
package main

import (
	"fmt"
	"math/cmplx"
)

var (
	ToBe   bool       = false
	MaxInt uint64     = 1<<64 - 1
	z      complex128 = cmplx.Sqrt(-5 + 12i)
)

func main() {
	// ...
}
```

Nem inicializált változók default értéküket veszik fel (a Go *zero value*-nak hívja):
```go
var i int // 0
var f float64 // 0.0
var b bool // false
var s string // ""
```