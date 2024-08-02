import { AbstractControl, ValidationErrors } from "@angular/forms";

// egyszerű validátor: fogadja az abstractControlt (a mezőt) és validációs hibát ad vissza
export function SsnValidator(control : AbstractControl) : ValidationErrors | null{
  const value = control.value;

  const digitsPattern = /^[0-9]*$/;
  if(!digitsPattern.test(value))
      return { 'ssn': true, msg: 'A taj szám csak számjegyeket tartalmazhat'} // hiba esetén hibaobjektummal térek vissza

  if(value.length !== 9)
  return { 'ssn': true, msg: 'A taj szám csak 9 számjegyet tartalmaz'} // hiba esetén hibaobjektummal térek vissza

  // ellenőrző összeg számítása
  /*
      1 bázisú indexelés esetén a TAJ szám első nyolc számjegyéből a páratlan helyen állókat hárommal, a páros helyen állókat héttel szorozzuk, és a szorzatokat összeadjuk.
      Az összeget tízzel elosztva a maradékot tekintjük a kilencedik, azaz CDV kódnak.
  */
  const digits = [...value]; // karakterekre bontom
  let sum = 0; // ebbe gyűjtöm az összeget
  for(let i = 0; i < digits.length - 1; i++){
      if(i % 2 === 0) sum += parseInt(digits[i]) * 3;
      else sum += parseInt(digits[i]) * 7;
  }

  if(sum % 10 !== parseInt(digits[digits.length - 1]))
  return { 'ssn': true, msg: 'A taj szám ellenőrző összege helyetelen'} // hiba esetén hibaobjektummal térek vissza

  return null; // ha minden rendben, akkor null értékkel kell visszatérni
}

export function TinValidator(control : AbstractControl) : ValidationErrors | null{
    const value = control.value;

    const digitsPattern = /^[0-9]*$/;

    if(!digitsPattern.test(value))
      return {tin: true, msg: 'Az adóazonosító csak számjegyeket tartalmazhat'}
    if(value.length !== 10)
      return {tin: true, msg: 'Az adóazonosító 10 számjegyet tartalmaz.'}

    if(value.charAt(0) != '8')
      return {tin: true, msg: 'Az adóazonosító 8-as számjeggyel kezdődik.'}

    // ellenőrző összeg számítása
    /*
        Az ellenőrző-összeg számítása a következő algoritmus szerint zajlik 1 bázisú indexelés eseétn: az adóazonosító jel
        első kilenc számjegyét megszorozzuk a számjegy sorszámával, majd ezeket összeadjuk, az összeget elosztjuk 11-gyel és
        ha az osztás maradéka kisebb tíznél, akkor az lesz az ellenőrző-összeg, ha pedig tíz, akkor az eredmény
        nem használható adóazonosító jelként (változtassunk a 7.-9. számjegyeken -pl. adjunk hozzá egyet- és máris jó lesz az
        ebből kiszámolt ellenőrző-összeg).
    */
    const digits = [...value]; // karakterekre bontom
    let sum = 0; // ebbe gyűjtöm az összeget
    for(let i = 0; i < digits.length - 1; i++){
        sum += parseInt(digits[i]) * (i + 1);
    }

    if(sum % 11 !== parseInt(digits[digits.length - 1]))
      return {tin: true, msg: 'Az adóazonosító ellenőrző összege helytelen '}

    return null;
}
