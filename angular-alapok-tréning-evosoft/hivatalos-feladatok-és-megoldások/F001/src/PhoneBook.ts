import { Employee } from "./Employee";
import { IPerson } from "./IPerson";
import { Student } from "./Student";

class PhoneBook<T extends IPerson>{ // a létrehozás során kell megmondani, hogy milyen típussal dogozzunk (extends)
    // a T típust az osztályon belül tudjuk használni, később ezt fogja lecsérlni a TS a konkrét adattípusra, 
    // mivel a T típus leszármazotta az IPerson-nek, így minden olyat meg tudok tőle kérdezni közvetlenül, amit egy IPersontól (felület elírás)
    private people: T[]; // a tömbben T típusú elemeket szeretnénk tárolni 

    public constructor(){
        this.people = []; // inicializálom a tömböt 
    }

    public search(email? : string | undefined, phoneNumber? : string | undefined) : T[] {
        let items : T[] = [];
        if(arguments.length == 0){ // ha nem kapunk paramétert, akkor mindent visszaadunk (de másoljuk, referenciát nem adunk ki )
            items = structuredClone(this.people);
        }
       
 

        

        return items;
    }   

    public addItem(person: T){
        // kétszer ua. a személyt nem akaorm letárolni: Employee esetén az ssn egyezőség alapján, Studnet esetén
        // az opcionális email cím alapján akarok döntést hozni, ha nincs email, akkor a név és szülidőt figyelem egyben 
        if(person instanceof Employee){ // kompatibilis-e: Employee, vagy annak leszármazottja
            // az instaceof miatt már elérem az employee-ra vonatkozó elemeket 
            for(let p of this.people){
                if(p instanceof Employee && p.Ssn === person.Ssn)
                    throw new Error('A dolgozó már a telefonkönyvben van!');
            }
            this.people.push(person);
        }
        else if(person instanceof Student){ // kompatibilis-e: Student, vagy annak leszármazottja
            // a másik lehetőség az as kulcsszvaas típuskényszerítése, a létrehozott segédpéldány már megfelelő típusú lesz 
            let stud = (person as Student);
            for(let s of this.people){
                if(s instanceof Student && 
                    ((stud.Email == undefined && s.Email == undefined && stud.name == s.name && stud.birthDate == s.birthDate) ||
                     (stud.Email != undefined && s.Email != undefined && stud.Email == s.Email))
                )
                    throw new Error('A diák már a könyvben van!');
            }
            this.people.push(person);
        }
    }
}