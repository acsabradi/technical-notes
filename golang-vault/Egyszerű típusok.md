```go
bool

string

int  int8  int16  int32  int64
uint uint8 uint16 uint32 uint64 uintptr

byte // alias for uint8

rune // alias for int32
     // represents a Unicode code point

float32 float64

complex64 complex128
```

Habár lehetséges különböző bit-nagyságú integerek explicit használata, legtöbbször az `int` használata ajánlott.

Integer érték inkrementálása:
```go
intValue += 1
```