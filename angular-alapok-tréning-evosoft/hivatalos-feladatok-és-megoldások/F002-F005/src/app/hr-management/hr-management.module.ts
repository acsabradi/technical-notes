import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SexPipe } from './sex.pipe';



@NgModule({
  declarations: [
    EmployeeListComponent,
    SexPipe
  ],
  imports: [
    CommonModule
  ],
  exports : [
    EmployeeListComponent,
    SexPipe // másik modul is tudja használni ezt a pipeot
  ]
})
export class HrManagementModule { }
