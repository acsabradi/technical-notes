import { Sex } from "./Sex"; // a ./Sex.ts-ből beimportálom a Sex típus definícióját 


// interface: elő tudom írni publikus védelmi szintű metódusok és attribútumok definícióját
// -> később ha egy osztály kiterjeszti az interfacet, akkor minden metódust és attribútumot definiálnia kell
// -> segít az egységes interface kialakításában 

export interface IPerson{  
    name: string; // name nevű, szöveg típusú attribútum
    birthDate: Date; // birthDate nevű, Date típusú attribútum
    sex: Sex; // sex nevű, az általunk definiált felsorolás típuson alapuló adattípusú attr. 

}