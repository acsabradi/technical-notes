import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../model/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  @Output('itemCreated')
  todoAdded : EventEmitter<Todo> = new EventEmitter<Todo>(); // létrehozom az eseményt + output -> később emit

  buttonClick(description: string, prioS: string){
    let prio = parseInt(prioS); // a prioritáshoz kapcsolódó sorszám numerikus értékként

    let newTodo : Todo = {prio: prio, description: description, id: Math.floor(Math.random() * 100001)}
    // console.log(newTodo);
    // jelezm a szülőnek, hogy van egy beszúrandó adat -> OUTPUT dek. létrehozom egy olyna eseményt, amelyre feliratkozva
    // átadom a szülőnek a frissen készített példány.
    this.todoAdded.emit(newTodo);
  }
}
