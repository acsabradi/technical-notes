import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: CategoryListComponent
  },
  { path: '', pathMatch: 'full', redirectTo: 'list'} // nyitó oldal list útvonalra irányítás
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductCategoryRoutingModule { }
