```go
package main

import (
	"fmt"
	"runtime"
)

func main() {
	fmt.Print("Go runs on ")
	switch os := runtime.GOOS; os {
	case "darwin":
		fmt.Println("OS X.")
	case "linux":
		fmt.Println("Linux.")
	default:
		// freebsd, openbsd,
		// plan9, windows...
		fmt.Printf("%s.\n", os)
	}
}
```

Az az ág fut le, aminek az értéke megegyezik a feltétel kifejezéssel. A kiértékelés felülről lefelé történik. Csak egy ág fut le, így nem kell `break` az ág végére. Az ág értékének konstansnak kell lennie.

A feltétel elhagyásával `true` értékre teszteljük az ág értékeket:
```go
package main

import (
	"fmt"
	"time"
)

func main() {
	t := time.Now()
	switch {
	case t.Hour() < 12:
		fmt.Println("Good morning!")
	case t.Hour() < 17:
		fmt.Println("Good afternoon.")
	default:
		fmt.Println("Good evening.")
	}
}
```