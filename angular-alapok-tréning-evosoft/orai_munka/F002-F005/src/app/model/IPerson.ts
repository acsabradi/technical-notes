
import { Sex } from "./Sex"; // a másik fájlban definiált saját elemeket importálni kell

// interface: felsorolom a kötelező publikus mezőket + metódusokat (konstruktor 
// def nem szereplhet)
export interface IPerson{
    name: string; 
    birthDate : Date;
    sex : Sex;
}