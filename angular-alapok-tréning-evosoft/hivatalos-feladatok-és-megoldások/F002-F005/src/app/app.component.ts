import { Component } from '@angular/core';

/*
  modul alapú komponens
    a) be van sorolva egy modulhoz, jelenleg az app.module.ts-ben definiált NgModule direktíva tartalmazza a nevét
       a declarations-ba, azaz ez a komponens az app modul része
    b) azokhoz az elemekhez fér hozzá, amelyeket a modul importál (NgModule imports része)
    c) közvetlenül mások nem használhatják, előtte importálni kell a module tartalmát, utána férhetünk hozzá
    --> jellemzően feladatkörökre használjuk, ahol komplexebb feladatot fedünk le, még az is lehet, hogy önálló
        forgalomirányítással, pl. felhasználó kezelés (regisztráció, login, password reset) egy modul, és ebben
        írjuk le a működésüket
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'F002';
}
