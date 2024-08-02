import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrl: './list-todo.component.css'
})
export class ListTodoComponent {
  @Input({alias: 'items$', required: true}) // a listát, amit meg kell jeleníteni bejövő adatként kapom
  items$! : Todo[]; // meg fogom kapni induláskhoz az adatokat, hiszen fent kötelezőre állítottam

  // az értesítést fogadom a törlésről, de én is szólok a szülőnek, mert ő vezeti a nyilvántartást
  @Output('itemDeleted')
  deleted = new EventEmitter<Todo>();
  itemDeleted(item : Todo){
    this.deleted.emit(item);
  }
}
