```go
t := i.(T)
```

Ellenőrzi, hogy `i` interfész `T` típust tartalmaz-e. Ha nem, akkor hibát dob, ha igen, akkor átadja annak értékét `t`-nek.

Ha a hibadobást el akarjuk kerülni:

```go
t, ok := i.(T)
```

Ha `T` típust tartalmaz az interfész, akkor `ok` változó `true` lesz, `t` pedig felveszi a konkrét értéket. Máskülönben `ok` `false` lesz és `t` a `T` típus default értékét veszi fel.

```go
package main

import "fmt"

func main() {
	var i interface{} = "hello"

	s := i.(string)
	fmt.Println(s) // hello

	s, ok := i.(string)
	fmt.Println(s, ok) // hello true

	f, ok := i.(float64)
	fmt.Println(f, ok) // 0 false

	f = i.(float64) // panic: interface conversion: interface {} 
	                // is string, not float64
	fmt.Println(f)
}
```

Interfész típus felhasználható `switch-case` szerkezetnél is. Ilyenkor máshogy néz ki a típus lekérdezése.

```go
package main

import "fmt"

func do(i interface{}) {
	switch v := i.(type) {
	case int:
		fmt.Printf("Twice %v is %v\n", v, v*2)
	case string:
		fmt.Printf("%q is %v bytes long\n", v, len(v))
	default:
		fmt.Printf("I don't know about type %T!\n", v)
	}
}

func main() {
	do(21)      // Twice 21 is 42
	do("hello") // "hello" is 5 bytes long
	do(true)    // I don't know about type bool!
}
```