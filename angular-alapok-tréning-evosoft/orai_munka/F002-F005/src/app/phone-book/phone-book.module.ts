import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessCardListComponent } from './business-card-list/business-card-list.component';



@NgModule({
  declarations: [
    BusinessCardListComponent // ez a komponens a phonebook modulhoz tartozik
  ],
  imports: [
    CommonModule // gyakran használt eszközkészlet a nézetek készítéséhez
  ],
  exports: [BusinessCardListComponent] // kiexportálom a komponenst, így a modul importja után másik is hozzáférnek
})
export class PhoneBookModule { }
