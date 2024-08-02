import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactorialService {

  constructor() { }

  getFactorial(n: number){
    // javítás a teszt alapján: negatív paraméterre hibát kell dobni
    if(n < 0)
      throw new Error('A faktoriális csak nem negatív számok esetén számítható ki!');

    // 0 fakt hiba javítása
    if(n == 0) return 1;

    let fact = 1; // javítás: a kezdőérték 0 volt
    for(let i = 2; i <= n; i++)
      fact *= i; // javítás + volt a * helyett

    return fact; // javítás, eddig n-nel tértünk vissza
  }
}
