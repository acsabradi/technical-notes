A slice (a tömbbel ellentétben) változó hosszúságú tároló:
```go
package main

import "fmt"

func main() {
	primes := [6]int{2, 3, 5, 7, 11, 13}

	var s []int = primes[1:4]
	fmt.Println(s) // [3 5 7]
}
```

A slice értelmezhető egy array-re mutató pointer-ként:
```go
package main

import "fmt"

func main() {
	names := [4]string{
		"John",
		"Paul",
		"George",
		"Ringo",
	}
	fmt.Println(names) // [John Paul George Ringo]

	a := names[0:2]
	b := names[1:3]
	fmt.Println(a, b) // [John Paul] [Paul George]

	b[0] = "XXX"
	fmt.Println(a, b) // [John XXX] [XXX George]
	fmt.Println(names) // [John XXX George Ringo]
}
```

A slice literal létrehoz egy array-t és visszaad egy rá mutató pointer-t:
```go
package main

import "fmt"

func main() {
	q := []int{2, 3, 5, 7, 11, 13}
	fmt.Println(q) // [2 3 5 7 11 13]

	r := []bool{true, false, true, true, false, true}
	fmt.Println(r) // [true false true true false true]

	s := []struct {
		i int
		b bool
	}{
		{2, true},
		{3, false},
		{5, true},
		{7, true},
		{11, false},
		{13, true},
	}
	fmt.Println(s) // [{2 true} {3 false} {5 true} {7 true} {11 false} {13 true}]
}
```

Indexeléssel létrehozott slice-nál a default alsó érték 0, a default felső érték a tömb/slice hossza:
```go
package main

import "fmt"

func main() {
	s := []int{2, 3, 5, 7, 11, 13}

	s = s[1:4]
	fmt.Println(s) // [3 5 7]

	s = s[:2]
	fmt.Println(s) // [3 5]

	s = s[1:]
	fmt.Println(s) // [5]
}
```

`length`: mennyi elem van a slice-ban
`capacity`: mennyi elem van a slice által referált tömbben, a slice első elemétől számolva
```go
package main

import "fmt"

func main() {
	s := []int{2, 3, 5, 7, 11, 13}
	printSlice(s) // len=6 cap=6 [2 3 5 7 11 13]

	// üres slice
	s = s[:0]
	printSlice(s) // len=0 cap=6 []

	s = s[:4]
	printSlice(s) // len=4 cap=6 [2 3 5 7]

	// elhagyjuk az első 2 elemet
	s = s[2:]
	printSlice(s) // len=2 cap=4 [5 7]
}

func printSlice(s []int) {
	fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
}
```

A pointer-hez hasonlóan a slice default értéke `nil`:
```go
package main

import "fmt"

func main() {
	var s []int
	fmt.Println(s, len(s), cap(s)) // [] 0 0
	if s == nil {
		fmt.Println("nil!") // nil!
	}
}
```

A beépített `make()` függvénnyel olyan slice-ot hozunk létre, amely default értékkel van feltöltve. A hossz és a kapacitás is megadható:
```go
package main

import "fmt"

func main() {
	a := make([]int, 5)
	printSlice("a", a) // a len=5 cap=5 [0 0 0 0 0]

	b := make([]int, 0, 5)
	printSlice("b", b) // b len=0 cap=5 []

	c := b[:2]
	printSlice("c", c) // c len=2 cap=5 [0 0]

	d := c[2:5]
	printSlice("d", d) // d len=3 cap=3 [0 0 0]
}

func printSlice(s string, x []int) {
	fmt.Printf("%s len=%d cap=%d %v\n",
		s, len(x), cap(x), x)
}
```

Slice-ok slice-okból is állhatnak:
```go
package main

import (
	"fmt"
	"strings"
)

func main() {

	board := [][]string{
		[]string{"_", "_", "_"},
		[]string{"_", "_", "_"},
		[]string{"_", "_", "_"},
	}

	board[0][0] = "X"
	board[2][2] = "O"
	board[1][2] = "X"
	board[1][0] = "O"
	board[0][2] = "X"

	for i := 0; i < len(board); i++ {
		fmt.Printf("%s\n", strings.Join(board[i], " "))
	}
	/*
	X _ X
	O _ X
	_ _ O
	*/
}
```

A beépített `append()` függvénnyel új elemeket fűzünk hozzá a slice-hoz. A függvény automatikusan növeli a kapacitást ha szükséges:
```go
package main

import "fmt"

func main() {
	var s []int
	printSlice(s) // len=0 cap=0 []

	// üres slice-hoz fűzünk
	s = append(s, 0)
	printSlice(s) // len=1 cap=1 [0]

	s = append(s, 1)
	printSlice(s) // len=2 cap=2 [0 1]

	// több elemet adunk hozzá egyszerre
	// a kapacitás meg lesz emelve
	s = append(s, 2, 3, 4)
	printSlice(s) // len=5 cap=6 [0 1 2 3 4]
}

func printSlice(s []int) {
	fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
}
```