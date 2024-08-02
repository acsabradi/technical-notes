import { IPerson } from "./IPerson"; // azért kell, mert őt terjesztem ki 
import { Sex } from "./Sex"; // azért kell, mert felhasználom a típust az attr. definíció során 

// class: osztály defínció 
// implements: megjelölöm az implementálandó interfaceket
//  -> felelőssséget vállalok a megvalósításokra
//      -> felveszem publikusan az előírt attribútumokat 
//      -> megvalsóítom publikusan az előírt metódusokat
export class Employee implements IPerson{
    // előírt mezők -> csak public lehet (ki sem kellene írni, alapértelmezés szerint minden public)
    public name: string;
    public birthDate: Date;
    public sex: Sex;
    
    // saját mezők 
    private ssn!: string; // kötelező taj szám (nincs kívülről közvetlen elérés) // beállítsára fog kerülni !, vállalom, hogy az inicializálás során biztosan értéket kap
    private tin!: string; // kötelező adóazonosító jel  (nincs kívülről közvetlen elérés)// beállítsára fog kerülni !, vállalom, hogy az inicializálás során biztosan értéket kap
    private email!: string; // kötelező email cím  (nincs kívülről közvetlen elérés)
    private phoneNumbers: string[]; // string típusú tömb a telefonszámok eltárolására (nincs kívülről közvetlen elérés)


    // ami nem vehet undefined értékét, vagy értéket kell, hogy kapjan a létrehozás pillanatában, vagy a konstruktorban
    // konstruktor: példány inicializálásért felel, a példányosításkor lefut 
    constructor(ssn: string, tin: string, name: string, birthDate: Date, sex: Sex, email : string ){ 
        this.Ssn = ssn;
        this.Tin = tin;
        this.name = name;
        this.birthDate = birthDate;
        this.sex = sex;
        this.Email = email; // ha nem adjuk meg, akkor undefined értéket helyezünk el benne
        this.phoneNumbers = []; // inicializálom a telefonszámok tömbjét 
    }

    // a private mezőkhöz get/set metódusként tudunk hozzáférést biztosítani 
    //  get: paraméternélküli metódus, amely meghívása esetén kiolvasható egy-egy érték 
    //  set: egyparaméteres metódus, amely paraméterben kapja a beállítani kívánt adatot -> validálás után vagy beállít vagy hibát dob
    // get/set: metódusként valósítjuk meg, de kintről mezőnek tűnik
    // a publikus mezőkhöz "felesleges" get/set biztosítása, mivel közvetlenül elérhető -> bárki beleírhat
    get Ssn(){return this.ssn;}
    get Tin(){return this.tin;}
    get HasEmail(){return this.email !== undefined;}
    get Email() : string {return this.email;} 
    get HasPhoneNumber(){return this.phoneNumbers.length !== 0;}
    get PhoneNumberCount(){return this.phoneNumbers.length; }
    // nem lehet get-ter (van paramétere)
    /*get*/ getPhoneNumber(index : number){ 
        if(index < 0 || index >= this.phoneNumbers.length)
            throw new Error('Ilyen sorszámú telefonszám nem létezik!');
        return this.phoneNumbers[index];
    } 

    set Ssn(value:string){
        const digitsPattern = /^[0-9]*$/;

        if(!digitsPattern.test(value))
            throw new Error('A taj szám csak számjegyeket tartalmazhat!');
        if(value.length !== 9)
            throw new Error('A taj szám 9 karaktert tartalmaz!');

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
            throw new Error('A taj ellenőrző összeg helytelen!');

        this.ssn = value;
        
    }
    set Tin(value: string){
        const digitsPattern = /^[0-9]*$/;

        if(!digitsPattern.test(value))
            throw new Error('Az adóazonosító jel szám csak számjegyeket tartalmazhat!');
        if(value.length !== 10)
            throw new Error('A adóazonosító jel szám 10 karaktert tartalmaz!');

        if(value.charAt(0) != '8')
            throw new Error('Az adóazonosító első karaktere 8-as lehet!')

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
            throw new Error('Az ssn ellenőrző összeg helytelen!');

        this.tin = value;
    }
    set Email(value: string ){
        const emailPattern = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;
        if(emailPattern.test(value))
            throw new Error('Az e-mail cím formailag helytelen!');
        this.email = value;
    }

    addPhoneNumber(newNumber: string){
        if(this.phoneNumbers.indexOf(newNumber) === -1)
            this.phoneNumbers.push(newNumber);
    }



   
}
