import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductByCategoryListComponent } from './product-by-category-list/product-by-category-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: ProductListComponent},
  {path: 'add', component: NewProductComponent},
  {path: 'edit', component: EditProductComponent},
//  {path: 'delete', component: DeleteProductComponent},
  {path: 'byCategory/:slug', component: ProductByCategoryListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
