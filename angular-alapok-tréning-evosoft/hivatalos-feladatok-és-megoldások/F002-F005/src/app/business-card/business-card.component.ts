import { Component } from '@angular/core';

// standalone komponens, nem tartozik modulhoz, ennek két következménye van:
//   a) mindent, amire szüksége van közvetlenül importál a komponens (imports kb. ua., mint modul alapnál)
//   b) más modulok (vagy stanadalone komponensek) közvetlenül tudják importálni, ha szükség van rá
//  -> egy-egy jól körülírható, gyakran használt feladatot célszerű benne definiálni (pl. contact form)
@Component({
  selector: 'app-business-card',
  standalone: true,
  imports: [],
  templateUrl: './business-card.component.html',
  styleUrl: './business-card.component.css'
})
export class BusinessCardComponent {

}
