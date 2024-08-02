import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalcFactComponent } from './calc-fact/calc-fact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalcFactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'F015';
}
