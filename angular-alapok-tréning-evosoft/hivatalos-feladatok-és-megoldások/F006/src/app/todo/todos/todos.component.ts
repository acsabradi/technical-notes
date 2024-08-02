import { Component } from '@angular/core';
import { Priority, Todo } from '../todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  // ez a tároló réteg
  todos : Todo[] = [];
  stat = { low: 0, medium: 0, high: 0};

  newItem(todoItem : Todo){
    this.todos.push(todoItem);
    this.updateStat();
  }

  itemDeleted(todoItem : Todo){
    this.todos = this.todos.filter((item) => item.name != todoItem.name || item.priority != todoItem.priority);
    this.updateStat();
  }

  updateStat(){
    this.stat = {
      low: this.todos.filter(x => x.priority == Priority.low).length,
      medium: this.todos.filter(x => x.priority == Priority.medium).length,
      high: this.todos.filter(x => x.priority == Priority.high).length
    }
  }
}
