// reducer: megmondom, hogy az akcióknak hogyan kell működni
/*
import { Action } from "@ngrx/store";
import { TodoAction, TodoActionTypes } from "./todo.action";
import { Todo } from "../todo.model";

// egy fgv-ben írom le, ami megkapja az aktuális állapotot, illetve a műveletet és visszatér
// az új állapottal
export function todoReducer(actualState: Todo[] = [], action: TodoAction): Todo[] {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return [...actualState, action.payload]; // visszaadom az aktuális állapoto + hozzáteszem az akcióból származó tartalmat
    case TodoActionTypes.DELETE_TODO:
        return actualState.filter((x) => x.name != action.payload.name || x.priority != action.payload.priority) // visszaadom az aktuális állapotot, anélkül az elem nélkül, amit törörlnénk
    default:
      return actualState;
  }
}
*/

import { createReducer, on } from "@ngrx/store";
import { Priority, Todo } from "../todo.model";
import { addTodo, deleteTodo } from "./todo.action";
import { Action, TypedAction } from "@ngrx/store/src/models";
import { state } from "@angular/animations";

// új szintaxissal
// elkészítem az interfacet az állapothoz
export interface TodosState {
  todos: Todo[];
}

export const initialState: TodosState = {
  todos: [{id: 1, name: 'példa', priority : Priority.high}]
}; // leírom a kezdőállapototo

// a reducer párosítja az kezdőállapotot, valamint az állapotokat
const _todoReducer = createReducer(
  initialState, // kezdőállapot
  // az on egy-egy akció működését írja le, paraméterben kapjuk az akt állaptoto, plusz az akció kigészítő paramétereit (amit előírtunk)
  // és visszaadjuk az új állapotot
  on(addTodo, (state, { todo }) => ( // lemásolom az objektumot és kiegészítem a todos az új elemmel
    {
      ...state,
      todos: [...state.todos, todo]
    }
  )),
  on(deleteTodo, (state, { id }) => (// lemásolom az objektumot és töröl a todos elemből id alapon
    {
      ...state,
      todos: state.todos.filter((item) => item.id != id)
    }
  )),
);

export function todoReducer(state: TodosState , action: Action) {
  return _todoReducer(state, action);
}

export const featureName = "todos";
