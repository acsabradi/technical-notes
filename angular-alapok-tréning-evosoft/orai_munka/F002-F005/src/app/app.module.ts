import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { PhoneBookModule } from './phone-book/phone-book.module';
import { F004Component } from './f004/f004.component';
import { SexPipe } from './sex.pipe';
import { HrManagementModule } from './hr-management/hr-management.module';

// modul attól modul, hogy egy olyan osztály, amire alkalmazták az NgModule
// direktívát
@NgModule({
  declarations: [ // a nevezetes angular elemek, amelyeket ehhez a modulhoz sorolunk (komponens, direktíva, pipe)
    AppComponent,// SexPipe -> standalone, nem szerepeleht modul deklarációs részben
  ],
  imports: [ // azon modulok/standalon komponensek, amelyektől függ a modul (működése során tartalmukat szeretné használni)
    BrowserModule,
    AppRoutingModule,
    BusinessCardComponent, // importálom a standalone komponenst, hogy fel tudjam helyezni
    PhoneBookModule, // importálom a modult, hogy hozzáférjek annak exportált tartalmához
    F004Component,
    HrManagementModule
  ],
  exports: [ // a saját deklarációm közül kiajánlás, amelyeket a saját modul importálása után fel tudnak használni

  ],
  providers: [],
  bootstrap: [AppComponent] // csak az AppModule-nál (melyik komponenssel indul a modul)
})
export class AppModule { }
