import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-calc-fact',
  standalone: true,
  imports: [FormsModule, CommonModule], // sablon vezérelt űrlapot készítek
  templateUrl: './calc-fact.component.html',
  styleUrl: './calc-fact.component.css'
})
export class CalcFactComponent {
  number? : number;
  isNaN: Function = Number.isNaN;

  calc(form : NgForm){
    this.number = Number(form.value.number);
  }
}
