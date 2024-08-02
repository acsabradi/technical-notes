import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoModule } from './todo/todo.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoModule], // standalone, így neki kell közvetlenül importálni, amit használni akar
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'F006';
}
