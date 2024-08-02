// action: az adatokon értelmezett művelet interfésze (a bejövő paramétek)
// egy-egy műveletet a createAction függvénnyel tudunk létrehozni
import {createAction, props} from '@ngrx/store';
import { Todo } from './todo.model';

// a tennivalókat lehet olvasni (azért, mivel az apitól le kell kérni), lehet hozzáadni, lehet frissíteni, lehet törölni
// 1. paraméter az akció redux szerű leírása [ELEMTÍPUS] [az akció neve]
// 2. paraméter a bejövő inputadatok előírása
export const loadTodos = createAction('[Todo] Load Todos'); // elindítja az apit
// az apitól kétféle válasz jöhet (siker / sikretelenség)
export const loadTodosSuccess = createAction('[Todo] Load Todos Success', props<{todos: Todo[]}>()); // fogadni kell a bejövő adatokat
export const loadTodosFailure = createAction('[Todo] Load Todos Failure', props<{error: string}>()); // fogadom a hibaüzenetet
export const addTodo = createAction('[Todo] Add Todo', props<{todo: Todo}>()); // paraméterben átadom a rögzíteni kívánt adaotkat (id-t generálok neki egyedileg)
export const updateTodo = createAction('[Todo] Update Todo', props<{todo: Todo}>());// paraméterben átadom a módosítani kívánt adaotkat (id alapján frissítés)
export const deleteTodo = createAction('[Todo] Delete Todo', props<{id: number}>()); // id alapján törlök
