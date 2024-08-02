import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessCardListComponent } from './business-card-list/business-card-list.component';
import { Sex } from '../Sex';
import { Employee } from '../Employee';
import { PhoneBookComponent } from './phone-book/phone-book.component';
import { HrManagementModule } from '../hr-management/hr-management.module';


// a saját modelleket nem tudjuk a modulhoz kötni, a modulhoz, csak angular elemek köthetőek a declarations részben
// pl. komponens, direktíva, pipe
// az egyszerű osztályokat (reprezentánsokat) mindenki közvetlenül kezeli
@NgModule({
  declarations: [
    BusinessCardListComponent,
    PhoneBookComponent, // a modulban hoztam létre a komponenst
    // Employee, ez nem kell ide, sőt hibára fut, csak angular elemeket lehet a modulban kezelni
  ],
  imports: [
    CommonModule,
    HrManagementModule // szeretném használni majd belőle a SexPipe-ot a kíráshoz
  ],
  exports: [BusinessCardListComponent, PhoneBookComponent] // exportálhatom a deklarált tartalmak, így mások hozzáférnek a modul importálása után
})
export class PhoneBookModule { }
