import { Component, inject, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { CategoryService } from '../../category.service';
import { Observable } from 'rxjs';
import { Category } from '../../model/Category.model';
import { ProductService } from '../../product.service';
import { Product } from '../../model/Product.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent implements OnInit{
  prodForm = new FormGroup({
    title : new FormControl('', [Validators.required]),
    price : new FormControl('', [Validators.required]),
    brand : new FormControl('', [Validators.required]),
    sku: new FormControl('', [Validators.required]),
    category : new FormControl('', [Validators.required])
  })

  productService = inject(ProductService);
  catService = inject(CategoryService);
  routerService = inject(Router);
  categories$? : Observable<Category[]>;

  ngOnInit(): void {
    this.categories$ = this.catService.getData()
  }

  submit(){
   // a kézi subscribe ellentétét (leiratkozás) komponensek esetén az ngOnDestroy (közvetlenül a megszűnés)
   // életciklsu eseménybne le kell iratkozni
    this.productService.add({
      title: this.prodForm.value.title as string,
      brand: this.prodForm.value.brand as string,
      price: parseFloat(this.prodForm.value.price as string),
      category: this.prodForm.value.category as string,
      sku: this.prodForm.value.sku as string
    }).subscribe({
      next: (data) => {
        console.log(data)
        this.routerService.navigate(['products', 'byCategory', this.prodForm.value.category]);
      },
      error: (error) => {
        console.log(error.status)
      }
    })



  }
}
