Konstans definiálása:
```go
package main

import "fmt"

const Pi = 3.14

func main() {
	const World = "世界"
	fmt.Println("Hello", World)
	fmt.Println("Happy", Pi, "Day")
}
```
Csak karakter, string, bool és numerikus érték lehet konstans. Nem használható a `:=` deklaráció.

Blokkos konstant deklarálás:
```go
package main

import "fmt"

const (
	// bináris shift
	Big = 1 << 100
	Small = Big >> 99
)

func needInt(x int) int { return x*10 + 1 }
func needFloat(x float64) float64 {
	return x * 0.1
}

func main() {
	fmt.Println(needInt(Small)) // int
	fmt.Println(needFloat(Small)) // float
	fmt.Println(needFloat(Big)) // float
}
```

