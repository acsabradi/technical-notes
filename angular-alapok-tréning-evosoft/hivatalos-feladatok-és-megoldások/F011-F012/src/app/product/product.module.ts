import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ModifyComponent } from './modify/modify.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    ModifyComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule // http kapcsolatot kezel a service
  ]
})
export class ProductModule { }
