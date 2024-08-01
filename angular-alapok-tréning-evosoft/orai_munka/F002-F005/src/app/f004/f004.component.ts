import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneBook } from '../model/PhoneBook';
import { Employee } from '../model/Employee';
import { Sex } from '../model/Sex';
import { SexPipe } from '../sex.pipe';
import { JoinPipe } from '../join.pipe';

@Component({
  selector: 'app-f004',
  standalone: true,
  // mivel szükségem van a standalone SexPipe-ra, ezért őt közvetlenül importálom, ezután névvel hivatkozom rá
  imports: [ CommonModule, SexPipe, JoinPipe ],
  templateUrl: './f004.component.html',
  styleUrl: './f004.component.css'
})
export class F004Component {
  // létrehozok egy üres telefonkönyvet
  phoneBook : PhoneBook<Employee>;

  constructor(){
    this.phoneBook = new PhoneBook<Employee>(); // üres telefonkönvy

    this.phoneBook.addItem(new Employee('Teszt Elek', new Date(), Sex.MALE, 'te@gmail.com', '044567567'));
    this.phoneBook.addItem(new Employee('Teszt Anna', new Date(1992,0,1), Sex.FEMALE, 'ta@gmail.com', '044567568'));

    this.phoneBook.phoneNumbers[1].addPhoneNumber('+36209991122');
    this.phoneBook.phoneNumbers[1].addPhoneNumber('+36209991123');
  }
}
