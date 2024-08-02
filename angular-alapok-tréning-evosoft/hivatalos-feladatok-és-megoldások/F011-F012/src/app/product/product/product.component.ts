import { Component, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
    @Input({alias: 'product', required: true})
    item!: Product;

    // programozott navigálás: injektálni tudjuk a router szolgáltatását a komponensekbe és a navigate metóduson
    // keresztül program hívásból tudunk navigációs lépéseket végrehajtani ("szimuláljuk a felhasználó kattintását")
    constructor(private prodS : ProductService, private router : Router){}

    delete(){
      this.prodS.deleteItem(this.item)
        .subscribe({
            next: (success : boolean) => {
              console.log(success);
              this.router.navigate(['/products']); // a kezdőoldalra szeretnék menni (path adok meg)
            }
        });
    }

}
