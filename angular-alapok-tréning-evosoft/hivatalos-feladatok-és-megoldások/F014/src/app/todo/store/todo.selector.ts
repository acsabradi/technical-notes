import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Priority, Todo } from '../todo.model';
import { TodosState, featureName } from './todo.reducer';

// selector: kiválasztási műveletek leírása (szűrések, stb.)

// a teendők listája
export const selectTodos = createFeatureSelector<TodosState>(featureName);

// statisztikát is akarunk vezetni, ezért az aggregálást is innen vezetjük le
export const lowPriorityTodos = createSelector(
  selectTodos,
  (todos: TodosState) => todos.todos.filter(todo => todo.priority == Priority.low)
);
export const lowPriorityTodoCount = createSelector(
  lowPriorityTodos,
  (todos: Todo[]) => todos.length
);

