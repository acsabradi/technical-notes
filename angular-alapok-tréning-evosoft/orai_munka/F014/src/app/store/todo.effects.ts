import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from "../services/todo.service";
import { loadTodos, loadTodosFailure, loadTodosSuccess } from "./actions";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class TodoEffects{
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos), // tudjuk szűrni a művelettípust
      mergeMap(() =>
        this.todoService.getAll().pipe(
          map((todos) => loadTodosSuccess({todos})) ,
          catchError((error) => of(loadTodosFailure({error: error.message})))
        )
      )
    )
  )

  constructor(private actions$ : Actions, private todoService : TodoService){} // a bekövetkző művelet megfigyelése + a lehetőség, hogy szolgáltatást tudjunk indítani
}
