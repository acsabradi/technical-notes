// akicók: értelmezem, hogy milyen műveletek hajthatunk végre
import { createAction, props } from "@ngrx/store";
import { Todo } from "../todo.model";
/* régin így csináltuk
// egy felsorolás típusban kigyűjtöm, hogy milyen akciókat értelmezek a todo-kon
export enum TodoActionTypes {
  ADD_TODO = '[Todo] Add Todo',
  DELETE_TODO = '[Todo] Delete Todo'
}

// külön osztályt (típust) hozok létre az egyes feladatokhoz
class AddTodo implements Action {
  readonly type = TodoActionTypes.ADD_TODO; // ez az osztály a hozzáadás műveletét írja le
  constructor(public payload: Todo) {} // a művelet paramétere a hozzáadni kívánt elem
}
class DeleteTodo implements Action {
  readonly type = TodoActionTypes.DELETE_TODO; // ez az osztály a törlés műveletét írja le
  constructor(public payload: Todo) {} // a művelet paramétere a törölni kívánt elem
}

export type TodoAction = AddTodo | DeleteTodo; // egyesített típusként kiajánlom a műveltek halmazát
*/

// az új szintaxisban egyszerűbben leírható egyszerű createAction hívásokkal

export const addTodo = createAction('[Todo] Add Todo', props<{todo: Todo}>()); // paraméter a létrhozni kívánt teendő
export const deleteTodo = createAction('[Todo] Delete Todo', props<{id : number}>()); // paraméter az id, amit törölni szeretnék

