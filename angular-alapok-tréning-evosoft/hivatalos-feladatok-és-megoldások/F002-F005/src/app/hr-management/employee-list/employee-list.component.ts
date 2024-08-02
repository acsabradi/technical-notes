import { Component } from '@angular/core';
import { Employee } from '../../Employee';
import { Sex } from '../../Sex';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  // át kell alakítanunk az employee listet, mert a kivételek dobásával nincs lehetőségünk
  // arra, hogy a megjelenítés során dolgozzuk fel az adatokat (az alap szerint hibás adat
  // nem kerülhet az objektumba, mert kivételt dobunk) ==> legyen lekérdezhető az alkalmazottól
  // hogy helyes-e az adat (js objektumot adjunk vissza)
  //    -> EMPLOYEE OSZTÁLYBAN setSsn,setTin egyszerűsítés, és validSsn, validTin get-ter

  //employees : Employee[] = []; // teszt az üres listához
  employees : Employee[] = [
    new Employee('123456789', '845767x263e', 'Teszt Elek', new Date(2024,0,1), Sex.MALE, 'teel@gmail.com'),
    new Employee('04531578', '84570263', 'Teszt Anna', new Date(2024,0,1), Sex.FEMALE, 't&&&###ean@gmail.com')
  ];

}
