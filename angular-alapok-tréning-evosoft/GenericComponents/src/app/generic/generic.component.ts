import { NgForOf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-generic',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './generic.component.html',
  styleUrl: './generic.component.css'
})
export class GenericComponent<T> { // a T paramétert használjuk, a T-re az érték az input tömb átadásakor kerül beállításra
  @Input({alias: 'data'})
  data : T[] = []; // az adatokat a tömbben T típusúak

  @Output('selectionChanged')
  change  = new EventEmitter<T>(); // a visszaadott érték (output elem) T típusú

  selectedOption?: T;

  selectionChanged(){
    console.log(this.selectedOption);
    this.change.emit(this.selectedOption)
  }
}
