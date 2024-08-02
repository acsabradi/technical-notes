import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCategoryRoutingModule } from './product-category-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryService } from '../category.service';
//import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    ProductCategoryRoutingModule,
  ],
  providers: [CategoryService]
})
export class ProductCategoryModule { }
