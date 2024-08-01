import { Component } from '@angular/core';
import { Employee } from '../../model/Employee';
import { Sex } from '../../model/Sex';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  records : Array<Employee>;

  constructor(){
    this.records = new Array<Employee>();

    this.records.push(new Employee('Teszt Elek', new Date(), Sex.MALE, 'te@gmail.com', '04453s679'));
    this.records.push(new Employee('Teszt Anna', new Date(1992,0,1), Sex.FEMALE, 'ta@gmail.com', '044567568'));

  }
}
