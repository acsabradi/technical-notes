import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Todo } from '../store/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  // of operátor: a paraméterében átadott adatokat observable-ként bocsájtja ki
  // szimulálom az olvasási szolgáltatást
  getAll() : Observable<Todo[]>{
    let data: Todo[] = [
      { id: 0, description: 'főzés', ready: false},
      { id: 1, description: 'mosás', ready: false},
      { id: 2, description: 'tanulás', ready: true}
    ];

    return of(data).pipe(delay(2000)); // "szimulálom" a késletett visszaküldést
  }
}
