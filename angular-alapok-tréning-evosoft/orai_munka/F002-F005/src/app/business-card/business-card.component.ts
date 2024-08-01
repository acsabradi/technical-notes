import { Component } from '@angular/core';

@Component({
  // standard komponens definíicó
  selector: 'app-business-card', // hivatkozás rá a szelektrorral történik
  templateUrl: './business-card.component.html',
  styleUrl: './business-card.component.css',
  // standalon elemek
  standalone: true, // logikai értéket, amely jelezi, hogy önálló
  imports: [],// mivel nem tartozik modulhoz, közvetlenül importálja amire szüksége van (már az alapvető funkcionalitás eléréséhez is importálni kell)
  // + a standalone komp. nem szerepel egyetlen modul declaritons részében sem (és így az exports-ban sem)
})
export class BusinessCardComponent {

}
