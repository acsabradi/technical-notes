HTML és CSS külön fájlba kiszervezve:
```typescript
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutorial-project';
}
```

Komponensbe írva:
```typescript
import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    Hello Universe
  `,
  styles: `
    :host {
      color: #a144eb;
    }
  `,
  standalone: true,
})
export class AppComponent {}
```

Property és felhasználása template-ben:
```typescript
import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  template: `Hello {{ city }}, {{ 1 + 1 }}`,
  standalone: true,
})
export class AppComponent {
  city = 'San Francisco';
}
```

Egy másik komponens felhasználása:
```typescript
import {Component} from '@angular/core';
@Component({
  selector: 'app-user',
  template: `
    Username: {{ username }}
  `,
  standalone: true,
})
export class UserComponent { // AppComponent-ben felhasználandó modul
  username = 'youngTech';
}
@Component({
  selector: 'app-root',
  template: `<section><app-user /></section>`, // másik modul a template-ben
  standalone: true,
  imports: [UserComponent], // megadjuk a felhasználandó modulokat
})
export class AppComponent {}
```