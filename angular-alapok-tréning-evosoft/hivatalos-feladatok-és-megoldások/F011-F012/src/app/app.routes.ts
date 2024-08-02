import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'products',
    // felbontom és lazy loading töltöm be a product modul tartalmát, így akkor töltöm be ha szükség van rá
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },

  { path: '', pathMatch: 'full', redirectTo: 'home'}, // átiránytás
  { path: 'home', component: HomeComponent}, // home oldal
  { path: '**', component: ErrorComponent}
];
