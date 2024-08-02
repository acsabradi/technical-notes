import { Component } from '@angular/core';
import { PhoneBook } from '../../PhoneBook';
import { IPerson } from '../../IPerson';
import { Employee } from '../../Employee';
import { Student } from '../../Student';
import { Sex } from '../../Sex';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrl: './phone-book.component.css'
})
export class PhoneBookComponent {
  phoneBook : PhoneBook<IPerson> = new PhoneBook<IPerson>(); // létrehozzuk a telefonkönyvet
  emps : IPerson[] = [];

  constructor(){
    // egy dolgozó több telszámmal
    let emp = new Employee('123456789', '845767x263e', 'Teszt Elek', new Date(2024,0,1), Sex.MALE, 'teel@gmail.com');
    emp.addPhoneNumber('+3620520400');
    emp.addPhoneNumber('+36207551465');
    this.phoneBook.addItem(emp);
    // dolgozó telszám nélkül
    this.phoneBook.addItem(new Employee('1521441444', '88888', 'Teszt Anna', new Date(2024,0,1), Sex.FEMALE, 't&&&###ean@gmail.com'))
    // tanuló hozzáadása
    this.phoneBook.addItem(new Student('Teszt József', new Date(), Sex.MALE, 'tejo@gmail.com'));



  }
}

