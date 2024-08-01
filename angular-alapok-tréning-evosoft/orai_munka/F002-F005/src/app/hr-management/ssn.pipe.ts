import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ssn',
  pure: true
})
export class SsnPipe implements PipeTransform {
  transform(value: string): string {
    if(isNaN(Number(value))) return 'A TAJ szám nem csak számjegyeket tartalmaz!';
    if(value.trim().length !== 9) return 'A TAJ szám nem 9 karakterből áll!';

    let digits = [...value];// karakterekre bontom a szöveget
    let sum = 0; // ebbe összegzem az adatokat
    for(let i = 0; i < digits.length - 1; i++){
      if(i % 2 == 0) sum += parseInt(digits[i]) * 3;
      else sum += parseInt(digits[i]) * 7;
    }

    if(parseInt(digits[digits.length - 1]) != sum % 10) return 'A TAJ CDV összege helytelen!';

    return value;
  }

}
