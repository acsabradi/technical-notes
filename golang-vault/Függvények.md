```go
package main

import "fmt"

func add(x int, y int) int {
	return x + y
}

func main() {
	fmt.Println(add(42, 13))
}
```

Ha a paraméterek típusai megegyeznek:
```go
func add(x, y int) int {
	return x + y
}
```

Több értékkel vissza tudunk térni:
```go
package main

import "fmt"

func swap(x, y string) (string, string) {
	return y, x
}

func main() {
	a, b := swap("hello", "world")
	fmt.Println(a, b)
}
```

Elnevezett visszatérési értékek:
```go
package main

import "fmt"

func split(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	return
}

func main() {
	fmt.Println(split(17))
}
```
Úgy vesszük, mintha a függvény elején lennének definiálva a visszetérési változók. A "naked" return tér vissza az értékekkel.