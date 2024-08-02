import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './model/Product.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  http : HttpClient = inject(HttpClient);
  constructor() { }

  add(product : Product){
    const API_URL = `https://dummyjson.com/products/add`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(API_URL, product, {headers: headers});
  }


  delete(product: Product) : Observable<boolean>{
    const API_URL = `https://dummyjson.com/products/${product.id}`;

    return this.http.delete<any>(API_URL)
               .pipe<boolean>(
                  map((data) => {
                    return data.isDeleted;
                  })
               )
  }


  getList(categorySlug? : string){
    const API_URL = 'https://dummyjson.com/products';
    return this.getRecords(API_URL);
  }

  getListByCategory(categorySlug : string){
    const API_URL = `https://dummyjson.com/products/category/${categorySlug}`;
    return this.getRecords(API_URL);
  }


  private getRecords(uri : string) : Observable<Product[]>{
    return this.http.get<any>(uri) // a követkző pipe bemenete any típusú adat lesz
             .pipe<Product[]>(
                map((apiData) => {
                    let records : Product[] = [];

                    for(let p of apiData.products){
                       let newProduct : Product = {
                          id: p.id,
                          title: p.title,
                          sku: p.sku,
                          brand: p.brand,
                          price: p.price,
                          category: p.category
                       }
                       records.push(newProduct);
                    }

                    return records;
                })
             )

  }
}
