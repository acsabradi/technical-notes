Deferrált függvények akkor futnak le, miután az azt tartalmazó függvény lefutott:
```go
package main

import "fmt"

func main() {
	defer fmt.Println("world")

	fmt.Println("hello")
}
// kimenet:
// hello
// world
```
A függvény paraméterek azonnal, tehát már a `defer`-nél kiértékelődnek, csupán a lefutás tolódik.

A deferrált függvényeket a stack-en tárolják, így több `defer` esetén LIFO módon hajtódnak végre:
```go
fmt.Println("counting")

for i := 0; i < 10; i++ {
	defer fmt.Println(i)
}

fmt.Println("done")
/* 
kimenet:
counting
9
8
7
...
done
*/
```