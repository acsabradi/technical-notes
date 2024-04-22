A *pointer receiver*-ekkel definiált metódusok referencia szerint veszik át az értékeket. A metódusokat általában így definiáljuk, mert a legtöbb metódussal módosítani akarjuk a kapott *struct*-ot. Ezenfelül akkor is tanácsos pointer-t használni, ha nagy méretű paramétert várunk, mert így megspóroljuk annak másolását minden metódus hívásnál.

```go
package main

import (
	"fmt"
	"math"
)

type Vertex struct {
	X, Y float64
}

func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func (v *Vertex) Scale(f float64) {
	v.X = v.X * f
	v.Y = v.Y * f
}

func main() {
	v := Vertex{3, 4}
	v.Scale(10)
	fmt.Println(v.Abs()) // 50
}
```

> [!tip] Pointer indirection
> Habár a `Scale()` metódust `Vertex` pointer-re definiáltuk, a metódus mégis működött, amikor egy `Vertex` értékre, nem pedig egy pointer-re hívtuk azt. A Go észreveszi, hogy a `Scale()` pointer-t vár, ezért úgy veszi a metódus hívást, mintha arra hívtuk volna: `(&v).Scale(10)`
> A mechanizmus fordítva is működik: Ha a metódus érték szerint várja a paramétert, akkor a metódus akkor is működik, amikor pointer-re hívjuk azt. Ekkor a `p.Abs()` hívást úgy értelmezi, mintha ezt hívtuk volna: `(*p).Abs()`

Ezt a típusú metódust is át lehet alakítani függvénnyé:

```go
package main

import (
	"fmt"
	"math"
)

type Vertex struct {
	X, Y float64
}

func Abs(v Vertex) float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func Scale(v *Vertex, f float64) {
	v.X = v.X * f
	v.Y = v.Y * f
}

func main() {
	v := Vertex{3, 4}
	Scale(&v, 10)
	fmt.Println(Abs(v)) // 50
}
```

Itt arra kell figyelni, hogy a `v` változó címét (`&v`) kell átadni a függvénynek.

