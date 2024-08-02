import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-guess-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guess-game.component.html',
  styleUrl: './guess-game.component.css'
})
export class GuessGameComponent implements OnInit{
  @Input({alias: 'minValue', required: true})
  min!: number; // legkisebb generálható szám
  @Input({alias: 'maxValue', required: true})
  max!: number; // legnagyobb generálható szám
  generatedNumber: number = 0; // a generált "gondolt számot" itt fogom tárolni
  buttonNumbers : number[] = []; // a gombfeliratokat ebben tárolom
  lastGuess? : number | null; // ebbe fogom eltárolni az utolsó kattintás során megadott számot
  clickCount: number = 0; // tárolom, hogy hány kattintás történt (statisztika)

  // generál egy új számot a beállított intervallumról, és a gombokhoz szükséges
  // számokat is legenerálja egy tömbben
  generateNumber(){
    // generálok egy új számot
    this.generatedNumber = this.min + Math.floor(Math.random() * (this.max - this.min + 1))
    // létrehozom a megfelelő hosszúságú tömböt és generálom a lehetséges számokat az intervallumról eltolással
    this.buttonNumbers = Array.from({length: this.max - this.min + 1}, (_, index) => index + this.min);
    // újrakezdjük a játék, ezért nincs kattintás
    this.lastGuess = null;
    // a játék 0 tippről indul
    this.clickCount = 0;
  }

  // onInit hook metódus: az életciklus elején, az inicializáláskor fut le, itt sorsolok számot
  ngOnInit(): void {
    this.generateNumber();
  }

  // eseménykezelő a tipp gombra kattintáshoz, paraméterben mondjuk meg, hogy melyik gombra kattintott
  guess(number : number){
    this.buttonNumbers = this.buttonNumbers.filter(value => value !== number); // törlöm amire kattintott
    this.lastGuess = number;
    this.clickCount++;
  }

  reset(){
    this.generateNumber();
  }



}
