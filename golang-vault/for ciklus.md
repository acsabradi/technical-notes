```go
package main

import "fmt"

func main() {
	sum := 0
	for i := 0; i < 10; i++ {
		sum += i
	}
	fmt.Println(sum)
}
```

A vezérlő tagok elhagyhatók:
```go
sum := 1
for sum < 1000 {
	sum += sum
}
```

Végtelen ciklus:
```go
for {
}
```

Slice-on iterálás `range`-el:
```go
package main

import "fmt"

var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}

func main() {
	for i, v := range pow {
		fmt.Printf("2**%d = %d\n", i, v)
	}
}
```
A `range` két értéket ad minden ciklusban: az indexet és az indexnél lévő érték másolatát.

A visszaadott értékek tetszőlegesen elhagyhatók:
```go
for i, _ := range pow
for _, value := range pow
for i := range pow
```