import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GuessGameComponent } from './guess-game/guess-game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GuessGameComponent], // behivatkozom a GuessGame-t, mivel csak akkor fogom tudni felhelyezni (Standalone komponens)
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'F007';
}
