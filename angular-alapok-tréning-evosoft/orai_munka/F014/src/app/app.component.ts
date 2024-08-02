import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './store/todo.model';
import { AppState } from './store/store';
import { Store } from '@ngrx/store';
import { addTodo } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'F014';

  todos$ : Observable<Todo[]>;
  isLoading$ : Observable<boolean>;

  constructor(private store : Store<AppState>){
    this.todos$ = this.store.select(state => state.todo.todos);
    this.isLoading$ = this.store.select(state => state.todo.loading);

    let todo : Todo = {id: 12, description: 'almafa', ready: true}
    this.store.dispatch(addTodo({todo}))

  }

}
