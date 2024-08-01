import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../model/Todo';

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
  styleUrl: './delete-todo.component.css'
})
export class DeleteTodoComponent {
  @Input({alias: 'item', required: true})
  item! : Todo

  @Output('itemDeleted')
  itemDeleted = new EventEmitter<Todo>();

  delete(){
    this.itemDeleted.emit(this.item);
  }
}
