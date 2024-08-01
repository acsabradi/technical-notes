import { Priority } from "./Priority";

export interface Todo{
  id : number; // egyedi azonosító
  description : string; // tennivaló leírása
  prio: Priority; // tennivaló prioritása
}
