import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { DeleteTodoComponent } from './delete-todo/delete-todo.component';
import { PrioPipe } from './prio.pipe';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { featureName, todoReducer } from './store/todo.reducer';


@NgModule({
  declarations: [TodosComponent, AddTodoComponent, ListTodoComponent, PrioPipe, DeleteTodoComponent],
  imports: [
    CommonModule, FormsModule,
    // itt is lehetne, ha csak a modult érinti, de most kikerült az app config-ba
    StoreModule.forRoot({}), // tároló modulhoz adása
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: true}) // konfigurálás
  ],
  exports: [TodosComponent] //kifelé csak a komplex alkalmazást adom
})
export class TodoModule { }
