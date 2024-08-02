import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductByListComponent } from './product-by-list/product-by-list.component';
import { ProductByCategoryListComponent } from './product-by-category-list/product-by-category-list.component';
import { ProductService } from '../product.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductListComponent,
    NewProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    ProductByListComponent,
    ProductByCategoryListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule // reaktív (model vezérelt) űrlap
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
