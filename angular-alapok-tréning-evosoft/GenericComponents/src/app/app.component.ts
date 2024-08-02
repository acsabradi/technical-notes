import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenericComponent } from './generic/generic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GenericComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GenericComponents';

  // string tömb
  stringArray = ['alma', 'körte', 'cseresznye']
  // akkor a T paraméter string, így tulajdonképpen a kimenet is string lesz
  stringChanged(actualValue : string){ console.log(actualValue)}

  // nyilván működik a többi típusra is, de az a fontos, hogy az input meghatározz az outputot is

  // object tömb
  objectArray = [{id: 1, value: 'alma', toString(){return this.value}}, {id: 2, value: 'körte', toString(){return this.value}}]
  objectChanged(actualValue : object){ console.log(actualValue)}

}
