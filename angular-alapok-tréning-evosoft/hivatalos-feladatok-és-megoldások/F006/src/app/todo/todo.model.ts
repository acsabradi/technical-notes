// a modellt definiálom ebben (hogyan lehet leírni egy-egy teendőt)

export enum Priority{ low, medium, high } // felsorolás típus a prioritás lehet
export interface Todo{
  priority : Priority;
  name : string;
}
