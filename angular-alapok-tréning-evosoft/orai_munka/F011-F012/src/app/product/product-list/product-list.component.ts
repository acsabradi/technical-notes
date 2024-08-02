import { Component, Input } from '@angular/core';
import { Product } from '../../model/Product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input({required: true, alias: 'products'})
  products: Product[] = [];


}
