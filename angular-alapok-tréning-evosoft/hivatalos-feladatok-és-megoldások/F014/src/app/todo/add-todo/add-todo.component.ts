import { Component, EventEmitter, Output } from '@angular/core';
import { Priority, Todo } from '../todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  @Output('newItemAdded')
  addItem = new EventEmitter<Todo>();

  // azért veszem át a teljes elemet (nem csak az értéket, mert ki is kell takarítania a mezőt a rögzítés után)
  save1(name : HTMLInputElement, prio : HTMLSelectElement){
    // kiváltom az eseményt az adatokkal
    this.addItem.emit({id: Math.floor(Math.random() * 1000000), priority: Object.values(Priority).indexOf(prio.value), name: name.value});
    // kitarakítom amezőt
    prio.value = 'low'
    name.value = '';
  }


  todoItem : Todo = { id: Math.floor(Math.random() * 1000000), priority: Priority.low, name: ''};
  save2(){
    // egyszerűbb az esemény kiváltása a folyamatos szinkron miatt, de másolok mert egyébként a listábvan léveő elemet kötjük
    this.addItem.emit({...this.todoItem, id: Math.floor(Math.random() * 1000000)});
    // itt a modelen keresztül takaírtaok
    this.todoItem.priority = Priority.low;
    this.todoItem.name = '';
  }
}
