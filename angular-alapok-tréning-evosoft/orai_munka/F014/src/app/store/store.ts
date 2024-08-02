// a sok alrendszer működését egy alklamazás szintű rendszerré változtatja

import { Action, ActionReducer } from "@ngrx/store";
import { TodoState, todoReducer } from "./reducers";
import { TodoEffects } from "./todo.effects";

export interface AppState{ // interface az alkalmazás teljes állapotteréhez
  todo: TodoState
}

export interface AppStore{ // property és reducer összerendeléseket végüzünk
  todo: ActionReducer<TodoState, Action>;
}



export const appStore : AppStore = { // összerendelem, hogy melyik konkrét reducert kell használni az alrendszer kezeléshez
  todo: todoReducer
}
export const appEffects = [TodoEffects] // összegyűjtem a használt effect-eket (aszinkron műveletek)
