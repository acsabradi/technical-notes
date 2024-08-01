import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

// Minden modulhoz tudok routingolási lehetőséget kérni
//  ng g m <név> --routing
// -> A modulon belül van routing, akkor elkészíti a környezetet és nekünk
//    csak a szabályokat valamint az outlet helyét kell kitalálni.
// Routes: felállítom a routeok gyűjteményét
const routes: Routes = [

  {path: 'products', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
  {path: 'categories', loadChildren: () => import('./product-category/product-category.module').then(m => m.ProductCategoryModule)},
  {path: '**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // regisztráljuk az útvonalak
  exports: [RouterModule]
})
export class AppRoutingModule { }
