import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SexPipe } from '../sex.pipe';
import { SsnPipe } from './ssn.pipe';



@NgModule({
  declarations: [
    EmployeeListComponent,
    SsnPipe
  ],
  imports: [
    CommonModule,
    SexPipe // importálom a standalone pipe-ot, hogy fel tudjam használni a modulban
  ],
  exports: [EmployeeListComponent] // a modul importja után hozzá lehet férni
})
export class HrManagementModule { }
