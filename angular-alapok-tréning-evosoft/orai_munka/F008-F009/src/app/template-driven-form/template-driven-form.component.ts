import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, CommonModule], // FormsModule: template driven formok készítéséhez kell
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
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
