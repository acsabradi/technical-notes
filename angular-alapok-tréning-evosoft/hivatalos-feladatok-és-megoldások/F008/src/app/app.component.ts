import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeFormComponent], // standalone komponens: közvetlenül importálom a használt komponenst
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'F008';
}
