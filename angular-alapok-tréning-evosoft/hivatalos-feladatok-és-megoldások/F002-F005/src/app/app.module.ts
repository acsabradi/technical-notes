import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneBookModule } from './phone-book/phone-book.module';
import { HrManagementModule } from './hr-management/hr-management.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhoneBookModule, // fel szeretném helyezni a modul egyik komponensét, ezért a modult importálom
    HrManagementModule // szeretném látni a listát
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
