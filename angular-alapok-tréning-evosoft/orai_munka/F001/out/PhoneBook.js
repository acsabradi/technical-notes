"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneBook = void 0;
const Employee_1 = require("./Employee");
class PhoneBook {
    constructor() {
        this.phoneNumbers = new Array();
    }
    addItem(item) {
        this.phoneNumbers.push(item);
    }
    // keresés email / telefonszám alapján 
    search(sEmail) {
        let puffer = new Array();
        for (let item of this.phoneNumbers) {
            if (item instanceof Employee_1.Employee) { // ha Employee leszármazott, akkor van email és telfszám eleme is
                if (sEmail !== undefined && item.mail === sEmail) {
                    puffer.push(item);
                }
            }
        }
        return puffer;
    }
}
exports.PhoneBook = PhoneBook;
