import { createReducer, on } from "@ngrx/store";
import { Todo } from "./todo.model";
import { addTodo, deleteTodo, loadTodos, loadTodosFailure, loadTodosSuccess, updateTodo } from "./actions";


// 1) megállapítom és elkészítem az inicializáció állapot objektumot
export interface TodoState{
  todos: Todo[]; // ebbe tárolom a tennivalókat
  error: string; // hibaüzenet (ha hiba merül fel)
  loading: boolean; // folyamatban van az adatok töltése
}


export const initialState : TodoState = {
  todos: [], // kezdetben üres tömb (majd feltöltöm szerverről)
  error: '', // kezdetben nincs hiba
  loading: false // kezdetben nincs betöltés (hiszen azt majd a load action kezeli)
}
// reducer létrehozása: olyan függvény, amely az aktuális állapot, valamint az action
// (és parmaéterei) birtokában meghatározza az új állapotot
export const todoReducer = createReducer(initialState, // kiinduló állapot
  on(loadTodos, actState => ({...actState, loading: true})), // loadTodos jelentése: loading true, minden más marad
  on(loadTodosSuccess, (actState, {todos}) => ({...actState, loading: false, error: '', todos})), // siker esetén, jelezm, hogy kész a betöltés, nincs hiba, és átveszem az adatokat
  on(loadTodosFailure, (actState, {error}) => ({...actState, loading: false, error, todos: []})), // hiba esetén, error, nincs betöltés és kiürítem a felületemről az adatokat
  on(addTodo, (actState, {todo}) => ({...actState, todos: [...actState.todos, todo]})),
  on(updateTodo, (actState, {todo}) => ({...actState, todos: actState.todos.map(t => t.id == todo.id ? todo : t)})),
  on(deleteTodo, (actState, {id}) => ({...actState, todos: actState.todos.filter(t => t.id != id)}))
)
