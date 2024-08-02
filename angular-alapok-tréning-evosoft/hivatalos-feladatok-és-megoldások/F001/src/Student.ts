import { IPerson } from "./IPerson";
import { Sex } from "./Sex";

export class Student implements IPerson{
    // IPerson megvalósítás
    public name: string;
    public birthDate: Date;
    public sex: Sex;
   
    private email?: string; // vagy az opiconaliásságot jeleölhetnék az string | undefined opiconális típussal

    public constructor(n: string, b: Date, s: Sex, email? : string | undefined){ // az utolsó opiconális paraméter -> havíhatjuk a konstruktort 3 és 4 paraméterrel is
        this.name = n;
        this.birthDate = b;
        this.sex = s;
        this.Email = email;
    }

    public get Email(): string | undefined {return this.email;} // visszaadhatunk undefined-ot is, hiszen opcionális a mező
    public set Email(email: string | undefined){
        if(!email){
            this.email = undefined;
            return;
        }

        const emailPattern = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;
        if(emailPattern.test(email))
            throw new Error('Az e-mail cím formailag helytelen!');

        this.email = email;
    }

}