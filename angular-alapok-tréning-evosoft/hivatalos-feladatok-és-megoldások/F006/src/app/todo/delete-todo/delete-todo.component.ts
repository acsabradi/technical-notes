import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
  styleUrl: './delete-todo.component.css'
})
export class DeleteTodoComponent {
  @Input({required: true, alias: 'todoItem'}) // bejövő elemként megkapom a todo itemet
  todoItem! : Todo; // meg fogom kapni induláshoz

  @Output('itemDeleted') // kifelé tájékoztatást adok, ha törlés van
  deleteEvent = new EventEmitter<Todo>();

  delete(){
    // tájékoztatom a környezetem az eseményenk keresztül, hogy törölni kell az elemet
    this.deleteEvent.emit(this.todoItem); // az aktuális elemet törlik
  }
}
