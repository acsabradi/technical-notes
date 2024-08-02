import { Component, Input, inject } from '@angular/core';
import { Product } from '../../model/Product.model';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent {
  @Input({alias: 'item', required: true})
  itemToDelete! : Product

  productService : ProductService = inject(ProductService);
  router : Router = inject(Router);

  delete(){
    this.productService.delete(this.itemToDelete).subscribe({
      next: (success) => {
        if(success) this.router.navigateByUrl(this.router.url);
      }
    })
  }

}
