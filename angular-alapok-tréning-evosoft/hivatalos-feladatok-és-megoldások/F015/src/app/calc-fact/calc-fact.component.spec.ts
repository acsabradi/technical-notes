import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcFactComponent } from './calc-fact.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('CalcFactComponent', () => {
  let component: CalcFactComponent;
  let fixture: ComponentFixture<CalcFactComponent>;
  let htmlModel : DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcFactComponent] // importáljuk a szükséges elemeket, esetlegesen külső elemeket
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcFactComponent); // komponens létrehozása, amit tesztelni szeretnénk
    component = fixture.componentInstance; // componentInstance-n keresztül férünk hozzá a komponens elemeihez
    htmlModel = fixture.debugElement; // fixture.debugElement // a html tartalomhoz való hozzáférés
    fixture.detectChanges(); // változásészlelés és szükség esetén újrarenderelés
  });

  it('A komponens elkészült', () => {
    expect(component).toBeTruthy();
  });
  it('A komponens látható a beviteli mező', () => {
    // lekérdezem az elemet
    const item = htmlModel.query(By.css('#input_field')); // css szelektor alapján lekérdezem az elemet
    expect(item).toBeTruthy(); // ha létezik, akkor igaz
  });
  it('A komponens látható a gomb', () => {
    const item = htmlModel.query(By.css('#calc_button')); // css szelektor alapján lekérdezem az elemet
    expect(item).toBeTruthy(); // ha létezik, akkor true
  });


  it('A submit gombra kattintásnál lefut a submit függvény', () => {
    const submitFnc = spyOn(component, 'calc'); // a komponensen belül lehallgatom a calc függvényt

    const field = htmlModel.query(By.css('#input_field')); // kikeresem az input mezőt
    field.nativeElement.value = 'almafa'; // módosítom a mező értékét

    const button = htmlModel.query(By.css('#calc_button')); //kikeresem a gombt
    button.nativeElement.click();

    expect(submitFnc).toHaveBeenCalled(); // meghívásra került a submit függvény
  });
});


