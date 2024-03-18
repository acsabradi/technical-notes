A *dictionary* Go megfelelője, *key* és *value* párokat tárol.

A *map* default értéke a `nil`. Ekkor a *map* nem tartalmaz kulcsot és nem is lehet új kulcsot hozzáadni.

A `make()` függvénnyel inicializáljuk a változót:

```go
package main

import "fmt"

type Vertex struct {
	Lat, Long float64
}

var m map[string]Vertex

func main() {
	m = make(map[string]Vertex)
	m["Bell Labs"] = Vertex{
		40.68433, -74.39967,
	}
	fmt.Println(m["Bell Labs"]) // {40.68433 -74.39967}
}
```

Map literal:
```go
package main

import "fmt"

type Vertex struct {
	Lat, Long float64
}

var m = map[string]Vertex{
	"Bell Labs": Vertex{
		40.68433, -74.39967,
	},
	"Google": Vertex{
		37.42202, -122.08408,
	},
}

func main() {
	fmt.Println(m) // map[Bell Labs:{40.68433 -74.39967} Google:{37.42202 -122.08408}]
}
```

A típus elhagyható a *value*-ban:
```go
var m = map[string]Vertex{
	"Bell Labs": {40.68433, -74.39967},
	"Google":    {37.42202, -122.08408},
}
```

Új elem beszúrása vagy elem értékének frissítése:
```go
m[key] = elem
```

Elem lekérdezése:
```go
elem = m[key]
```

Elem törlése:
```go
delete(m, key)
```

Annak tesztelése, hogy egy *key* benne van-e a *map*-ben:
```go
elem, ok = m[key]

// ha a változók még nem voltak deklarálva:
elem, ok := m[key]
```

`ok` értéke `true`, ha a *key* benne van a *map*-ben, egyébként `false`. Utóbbi esetben az `elem` a *map* típusának default értékét veszi fel.