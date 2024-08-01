"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    // ami nem vehet fel undefined értéket, annak vagy a létrehozás során vagy a konstruktorban értéket kell kapnia
    constructor(n, bd, s, m, ssn) {
        this.phoneNumbers = new Array(); // string típusú, üres tömb 
        this.name = n;
        this.birthDate = bd;
        this.sex = s;
        this.mail = m;
        this.ssn = ssn;
    }
    addPhoneNumber(number) {
        this.phoneNumbers.push(number);
    }
}
exports.Employee = Employee;
