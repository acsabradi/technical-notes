import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { DeleteTodoComponent } from './delete-todo/delete-todo.component';



@NgModule({
  declarations: [
    TodoAppComponent, TodoListComponent,
    AddTodoComponent, DeleteTodoComponent
  ],
  exports: [TodoAppComponent],
  imports: [
    CommonModule
  ]
})
export class TodoModule { }
