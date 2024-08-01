
import { IPerson } from "./IPerson"; // innen jön az IPerson interface
import { Sex } from "./Sex"; // innen jön a Sex típus

export class Employee implements IPerson{ // impl. az interfacet -> fel kell venni a kötelzeő mezőket + metódusokat
    // ezeket a kiterjesztettt interface miatt kötelező bevezetni 
    name: string;
    birthDate: Date;
    sex: Sex;
    // ami nem vehet fel undefined értéket, annak vagy a létrehozás során vagy a konstruktorban értéket kell kapnia
    constructor(n : string, bd : Date, s : Sex, m : string, ssn : string){
        this.name = n;
        this.birthDate = bd;
        this.sex = s;
        this.mail = m;
        this.ssn = ssn;
    }
    // egészítsük ki az osztályt: mail, phoneNubmers (tömb), valamint ssn mezőkkel 
    // a phoneNumbers hozzáadásához készítsünk egy addPhoneNumber metódust, amely paraméterben várja 
    // a telefonszámot stringként 
    mail : string; // kötelező, publikus 
    ssn : string; // kötelező, publikus 
    phoneNumbers : Array<string> = new Array<string>();  // string típusú, üres tömb 
    
    addPhoneNumber(number: string){ // telefonszám hozzáadása 
        this.phoneNumbers.push(number); 
    }

}