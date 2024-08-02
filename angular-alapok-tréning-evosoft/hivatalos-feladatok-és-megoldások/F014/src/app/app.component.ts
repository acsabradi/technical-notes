import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todo/store/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodoModule } from './todo/todo.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'F014';
}
