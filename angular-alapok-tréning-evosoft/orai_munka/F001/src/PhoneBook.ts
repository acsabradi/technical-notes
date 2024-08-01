import { Employee } from "./Employee";
import { IPerson } from "./IPerson";

export class PhoneBook<T extends IPerson>{ // az osztályon belül egy T típussal dolgozom, amely felülete egy IPerson-nek felel meg, és a konkrét típust, majd a létrehozásnál adják meg
    phoneNumbers : Array<T>;

    constructor(){
        this.phoneNumbers = new Array<T>();
    }

    addItem(item : T){
        this.phoneNumbers.push(item);
    }

    // keresés email / telefonszám alapján 
    search(sEmail? : string) : Array<T>{
        let puffer: Array<T> = new Array<T>();

        for(let item of this.phoneNumbers){
            if(item instanceof Employee){ // ha Employee leszármazott, akkor van email és telfszám eleme is
                if(sEmail !== undefined && item.mail === sEmail){
                    puffer.push(item);
                }
            }
        }

        return puffer;
    }
}