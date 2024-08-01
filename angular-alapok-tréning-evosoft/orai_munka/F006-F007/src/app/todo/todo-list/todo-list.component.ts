import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../model/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  // KÖTELEZŐEN MEG KELL KAPNUNK A MEGJELEÍTENDŐ ELEMEK LISTÁJÁT TULAJDONSÁGKÉNT (INPUT DEK. HASZN.)
  @Input({required: true, alias: 'list'}) // kívülről kötelező beállítani az alábbi formbáan [list]=""
  records!: Todo[];
  @Output('itemDeleted')
  itemDeleted = new EventEmitter<Todo>()

  delete(item : Todo){
    this.itemDeleted.emit(item);
  }
}
