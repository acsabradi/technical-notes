Nem csak struct-hoz, hanem típushoz is rendelhetünk metódust:

```go
package main

import (
	"fmt"
	"math"
)

type MyFloat float64

func (f MyFloat) Abs() float64 {
	if f < 0 {
		return float64(-f)
	}
	return float64(f)
}

func main() {
	f := MyFloat(-math.Sqrt2)
	fmt.Println(f.Abs())
}
```

Itt a `MyFloat` típus float értéket tárol, és ehhez definiálunk metódust.

> [!tip] Metódus implementálás hatóköre
> Metódust csak akkor tudunk típushoz rendelni, ha a típus deklaráció és a metódus egy package-ben vannak.
> A fenti példában ezért kellett egy saját típussal becsomagolni a float-ot, mert a beépített float típus máshol van definiálva.