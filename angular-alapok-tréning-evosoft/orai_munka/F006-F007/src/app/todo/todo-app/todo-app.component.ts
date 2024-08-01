import { Component } from '@angular/core';
import { Todo } from '../../model/Todo';
import { Priority } from '../../model/Priority';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.css'
})
export class TodoAppComponent {
  todos : Todo[];

  constructor(){
    this.todos = [];

    this.todos.push({id: 1, description: 'test1', prio: Priority.HIGH});
    this.todos.push({id: 2, description: 'test1', prio: Priority.LOW});
  }


  addItem(item : Todo){
    this.todos.push(item);
    console.log(this.todos);
  }

  delete(item : Todo){
    this.todos = this.todos.filter(x => x.id != item.id);
  }

}
