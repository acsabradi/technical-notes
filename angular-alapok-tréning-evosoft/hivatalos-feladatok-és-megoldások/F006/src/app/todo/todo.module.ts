import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { DeleteTodoComponent } from './delete-todo/delete-todo.component';
import { PrioPipe } from './prio.pipe';



@NgModule({
  declarations: [TodosComponent, AddTodoComponent, ListTodoComponent, PrioPipe, DeleteTodoComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [TodosComponent] //kifelé csak a komplex alkalmazást adom
})
export class TodoModule { }
