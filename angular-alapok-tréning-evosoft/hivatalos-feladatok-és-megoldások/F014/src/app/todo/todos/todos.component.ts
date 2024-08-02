import { Component } from '@angular/core';
import { Priority, Todo } from '../todo.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { lowPriorityTodoCount, selectTodos } from '../store/todo.selector';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  // ez a tároló réteg
  //todos : Todo[] = [];
 // stat = { low$: 0, medium: 0, high: 0};
 // itt csak a statom követem (megfigyelő tervezési mintát használunk -> async változik)
   lowCnt$ : Observable<number>;
  // mediumCnt$ : Observable<number>;
 //  highCnt$ : Observable<number>;

  constructor(private store: Store){ // injektálom a tárolót
    this.lowCnt$ = this.store.select(lowPriorityTodoCount);
  //  this.mediumCnt$ = this.store.select(lowPriorityTodoCount);
  //  this.highCnt$ = this.store.select(lowPriorityTodoCount);
    console.log(this.lowCnt$);
  }



}
