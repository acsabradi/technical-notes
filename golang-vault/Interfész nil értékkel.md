Ha konkrét érték nincs az interfészhez rendelve, akkor az `nil` értéket vesz fel. Go-ban ez nem okoz hibát, helyette metódusban tudjuk ezt kezelni.

```go
package main

import "fmt"

type I interface {
	M()
}

type T struct {
	S string
}

func (t *T) M() {
	if t == nil {
		fmt.Println("<nil>")
		return
	}
	fmt.Println(t.S)
}

func main() {
	var i I

	var t *T
	i = t
	describe(i) // (<nil>, *main.T)
	i.M() // <nil>

	i = &T{"hello"}
	describe(i) // (&{hello}, *main.T)
	i.M() // hello
}

func describe(i I) {
	fmt.Printf("(%v, %T)\n", i, i)
}
```

Ha az interfész `nil`, akkor bármilyen metódusának hívása hibát dob, hiszen nincs hozzárendelve implementáció egy típuson keresztül.

```go
package main

import "fmt"

type I interface {
	M()
}

func main() {
	var i I
	describe(i) // (<nil>, <nil>)
	i.M() // panic: runtime error: invalid memory address 
	      // or nil pointer dereference
}

func describe(i I) {
	fmt.Printf("(%v, %T)\n", i, i)
}
```

Az üres interfész (nincs metódus szignatúrája) bármely típust fel tud venni.

```go
package main

import "fmt"

func main() {
	var i interface{}
	describe(i) // (<nil>, <nil>)

	i = 42
	describe(i) // (42, int)

	i = "hello"
	describe(i) // (hello, string)
}

func describe(i interface{}) {
	fmt.Printf("(%v, %T)\n", i, i)
}
```