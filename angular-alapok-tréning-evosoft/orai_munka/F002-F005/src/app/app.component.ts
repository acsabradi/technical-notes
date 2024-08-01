import { Component } from '@angular/core';

// Az AppComponent-en alkalmazzuk a @Componenet direktívát (a core-ból)
// 1) Az AppComponent komponensként funkcionál (látja a felhasználó és működést ír le)
// 2) Biztosan van selectora (amivel meg lehet hivatkozni html-ből), templateje (ami leírja
//    hogy mit kell látni a böngészőben) és alkalmazás logikája (az osztály implementációja, amely megmondja a működést).
//  ---> Ezt biztosítja a Component direktíva
@Component({
  selector: 'app-root', // selector -> egyedi azonosító a htmlből történő felhelyezésre
  templateUrl: './app.component.html', // csakis egy nézetfájl hivatkozás (template vs templateUrl: a sima template-nél közvetlenül a kulcs után írjuk a sablon (nincs külön fájl))
  styleUrl: './app.component.css' // opcionális komponens szintű css (styleUrl: egy lap elérése, styleUrls: több elérés tömbként, styles: helyben adom meg a szabályokat tömbben felsorolva)
})
export class AppComponent {
  title = 'F002-F005';
}
