import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, FormsModule], // sablon vezérelt űrlap (FormsModule import kell hozzá )
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  // nemek, dinamikusan dolgozzuk fel a nézetben (radio gombok)
  sexes = [
    { id: 'M', name: 'férfi'},
    { id: 'F', name: 'nő'}
  ];
  // családi állapotok, dinamikusan dolgozzuk fel a nézetben (select)
  statuses = [
    { id: 1, name: 'egyedülálló'},
    { id: 2, name: 'házas'},
    { id: 3, name: 'elvált'},
    { id: 4, name: 'özvegy'},
  ];


  submit(form : NgForm){ // bejövő parméterként kapom meg a formot
    console.log(form.value);
  }
}
