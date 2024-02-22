```go
package main

import "fmt"

type Vertex struct {
	X int
	Y int
}

func main() {
	v := Vertex{1, 2}
	p := &v
	p.X = 1e9
	fmt.Println(v) // Kimenet: {1000000000 2}
}
```

A pointer-ek működése szerint a mezők eléréséhez először a mutatót kellene dereferálni: `(*p).X`. De a fordító megengedi hogy elhagyjuk az explicit dereferálást: `p.X = 2`.