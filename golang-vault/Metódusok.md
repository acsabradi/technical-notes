Go-ban nincsenek osztályok, de definiálhatunk struct-hoz rendelt metódusokat.

A metódusoknak van egy *receiver argument*-jük a `func` kulcsszó és a metódus név között. Ez adja meg, mely struct-hoz csatoljuk a metódust.

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

func main() {
	v := Vertex{3, 4}
	fmt.Println(v.Abs()) // 5
}
```

A metódusok átalakíthatók sima függvényekké:

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

func main() {
	v := Vertex{3, 4}
	fmt.Println(Abs(v)) // 5
}
```

[[Típus metódusok]]