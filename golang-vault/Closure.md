A *closure* olyan anonim függvény, ami olyan változóra referál, amit nem abban a függvényben deklaráltak. A függvény így hozzá van kötve a változóhoz.

```go
package main

import "fmt"

func adder() func(int) int {
	sum := 0
	return func(x int) int {
		sum += x
		return sum
	}
}

func main() {
	pos := adder()
	for i := 0; i < 10; i++ {
		fmt.Println(pos(i))
	}
	/*
	0
	1
	3
	6
	10
	15
	21
	28
	36
	45
	*/
}
```

A *closure* által referált változó egyfajta állapotváltozóként működik, mintha egy osztály tagja lenne.