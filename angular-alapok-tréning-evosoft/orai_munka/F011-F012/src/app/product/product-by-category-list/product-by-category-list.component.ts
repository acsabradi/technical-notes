import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';
import { Observable } from 'rxjs';
import { Product } from '../../model/Product.model';
@Component({
  selector: 'app-product-by-category-list',
  templateUrl: './product-by-category-list.component.html',
  styleUrl: './product-by-category-list.component.css'
})
export class ProductByCategoryListComponent {
  // AcitvatedRoute szolgáltatás, amely az aktivált (aktuális) útvonal vizsgálatát teszi lehetővé
  // a) pillanatkép készítése az útvonalról (csak akt. értékek kiolvasása)
  // b) subscribe megfigyelni az útvonalat (változások nyomonkövetése)

  activatedRoute : ActivatedRoute = inject(ActivatedRoute);
  productService : ProductService = inject(ProductService);
  categorySlug? : string;
  data : Product[] = [];

  constructor(){
    // this.activatedRoute.snapshot.paramMap.get()
    this.activatedRoute.paramMap.subscribe((params) => {
      this.categorySlug = params.get('slug') as string;
      this.productService.getListByCategory(this.categorySlug)
          .subscribe({
            next: (data) => {this.data = data;}
          })
    });
  }
}
