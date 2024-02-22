# Modulok
A modulnak szánt mappában futtatjuk:
```
go mod init golang-tutorial/tour-of-go
```
Modul nélkül nem működik a debug VS Code-ban. A Code ezen kívül kéri a [Delve](https://github.com/go-delve/delve) telepítését is debuggoláshoz. A telepített Go tool-ok a `$User\go\bin` alatt találhatók.

# Package-ek
```go
package main // package név

import ( // beimportált package-ek
	"fmt"
	"math/rand" // A path utolsó tagja a package név.
			    // Ez a sor behúz mindent fájlt 
			    // ami package rand-al kezdődik.
)

func main() { // program belépési pont
	fmt.Println("My favorite number is", rand.Intn(10))
}
```

Alternatív importálás (a fenti "factored" formátum ajánlott):
```go
import "fmt"
import "math"
```

A beimportált package-ek exportált elemeit tudjuk felhasználni. Az exportált elemek nevei nagy betűvel kezdődnek:
```go
package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Println(math.Pi)
}
```