Az interfészeket metódus szignatúrákkal (metódus név, paraméter és visszatérési érték) definiáljuk. Egy interfész olyan típusokat tárolhat, amelyek implementálják az interfész metódusait.

Az interfészeket implicit módon implementáljuk, nincs szükség külön kulcsszóra. Ha a típus definiálja a megfelelő metódusokat, akkor implementálta az interfészt:

```go
package main

import "fmt"

type I interface {
	M()
}

type T struct {
	S string
}

// T típus implementálta az I interfészt
func (t T) M() {
	fmt.Println(t.S)
}

func main() {
	var i I = T{"hello"}
	i.M() // "hello"
}
```

[[Interfész mint tuple]]
[[Interfész nil értékkel]]
[[Interfész típus ellenőrzés]]
[[Stringer]]