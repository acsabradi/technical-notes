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