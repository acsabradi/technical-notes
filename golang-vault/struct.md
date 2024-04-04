```go
package main

import "fmt"

type Vertex struct {
	X int
	Y int
}

func main() {
	fmt.Println(Vertex{1, 2}) // Kimenet: {1 2}
}
```

A `struct` mezőket `.`-al lehet elérni:
```go
package main

import "fmt"

type Vertex struct {
	X int
	Y int
}

func main() {
	v := Vertex{1, 2}
	v.X = 4
	fmt.Println(v.X) // Kimenet: 4
}
```

`struct` literal:
```go
package main

import "fmt"

type Vertex struct {
	X, Y int
}

var (
	v1 = Vertex{1, 2}  // 
	v2 = Vertex{X: 1}  // Y mező a default értéket veszi fel: 0
	v3 = Vertex{}      // Mindkettő mező default értéket vesz fel: X:0, Y:0
	p  = &Vertex{1, 2} // struct pointer
)

func main() {
	fmt.Println(v1, p, v2, v3)
	// {1 2} &{1 2} {1 0} {0 0}
}
```

[[Metódusok]]