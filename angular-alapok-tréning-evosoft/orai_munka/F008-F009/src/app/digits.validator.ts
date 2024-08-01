import {AbstractControl, ValidationErrors} from '@angular/forms';

// praméter nélküli validátor: fogadja a vizsgálandó kontrolt és null értékkel tér vissza, ha az adat helyes,
// ellenkező esetben pedig a hibát leíró objektummal (a hiba kulcsa a validátor neve)
export function DigitsValidator(control : AbstractControl) : null | ValidationErrors{
  let controlValue = control.value;

  if(isNaN(Number(controlValue))) return { digits: true}; // jelzem a hibát, de hibaleírót nem adok vissza

  // ha minden oké, akkor null-al térünk vissza
  return null;
}

// paraméteres validátor: olyan függvény, amely fogadja a validációs paramétereket (az abstract controlon kívül)
// és visszaadja a függvény kifj., amellyel validáció elvégezhető lesz
export function ExactLengthValidator(length: number) {
  // a külső szint fogadja a programozói paramétereket, a validátor felhelyezésekor
  // és visszaadom azt a validátor fgv-t, amit az angular automatikusan tud majd futtatni
  return function (control: AbstractControl) : ValidationErrors | null{
    let controlValue : string = control.value;

    if(controlValue.trim().length != length)
      return {exactlength: {length: length, actlength : controlValue.trim().length}}

    return null;
  }
}


// ssn validáció, hibaüzenet visszaadással (paraméterben mondjuk meg a nylevet)
export function ssnValidator(langCode : any = 'HU'){
  return function(control : AbstractControl) : null | ValidationErrors{
      let value = control.value;
      let errorsMsg = {
        HU: ['Csak számok!', 'Hosszhiba!', 'CDV hiba!'],
        EN: ['Only digits!', 'Bad length', 'CDV error'],
      }

      if(isNaN(Number(value))) return {ssnvalidator: {msg: errorsMsg[langCode as keyof object][0]}};
      if(value.trim().length !== 9) return {ssnvalidator: {msg: errorsMsg[langCode as keyof object][1]}};

      let digits = [...value];// karakterekre bontom a szöveget
      let sum = 0; // ebbe összegzem az adatokat
      for(let i = 0; i < digits.length - 1; i++){
        if(i % 2 == 0) sum += parseInt(digits[i]) * 3;
        else sum += parseInt(digits[i]) * 7;
      }

      if(parseInt(digits[digits.length - 1]) != sum % 10) return {ssnvalidator: {msg: errorsMsg[langCode as keyof object][2]}};

      return value;
  }
}
