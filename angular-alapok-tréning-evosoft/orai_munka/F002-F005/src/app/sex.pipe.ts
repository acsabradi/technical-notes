import { Pipe, PipeTransform } from '@angular/core';
import { Sex } from './model/Sex';

@Pipe({
  name: 'sex', // ezzel tudok rá hivatkozni a sablonban
  standalone: true, // egy pipe is lehet standalon (ilyenkor nem tartozik modulhoz)
  pure: true // nem tárol adatokat, és csak akkor kell újra kiértékelni, ha a bemenő adat változik
})
export class SexPipe implements PipeTransform { // pipe: implementálja a PipeTransform inerfacet

  // transform metódus: elvégzi a transzformációt
  // 1. paraméter: a pipe előtt szereplő érték
  transform(value: Sex, lang: string = 'en', ...args: unknown[]): string {
    switch(lang){
      case 'hu':
        if(value == Sex.FEMALE) return 'nő';
        else return 'férfi';
      break;
      default: // en, ha nem adják meg
        if(value == Sex.FEMALE) return 'female';
        else return 'male';
      break;
    }
  }

}
