import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  static BASE_URL :string = 'https://dummyjson.com/products/';

  // mivel kell a http szolgáltatás ezért injektálom az osztályba
  constructor(private http : HttpClient) {}

  // get kérés megvalósítása -> adatok lekérése
  getData(){
    // Observable-el tér vissza, így az eredményre fel tudunk iratkozni
    // generikusan meghatározható a típus
    return this.http.get(ProductService.BASE_URL)
               .pipe<Product[]>(
                  // any típus alakítunk Product tömbbé
                  map<any, Product[]>((data) => {
                     const result: Product[] = [];

                     let products = data.products;
                     for(let p of products){
                        let newProduct = new Product(
                            p.title,
                            p.price,
                            p.sku,
                            p.id
                        );
                        newProduct.productImages = p.images;
                        newProduct.stock = p.stock; // csak azért, hogy később szűrni tudjak rá
                        if(p.stock != 0)
                          result.push(newProduct);
                     }
                     return result;
                  }),
                //  filter((products) => false)
                )

  }


  deleteItem(item: Product){
    let deleteUrl = ProductService.BASE_URL + item.id;
    return this.http.delete<any>(deleteUrl)
        .pipe<boolean>(
           map((data : any) => {
              return (data.isDeleted as boolean);
           })
        )
  }

  addItem(item : Product){
    let addUrl = ProductService.BASE_URL + '/add';
    return this.http.post<any>(
        addUrl, // hová?
        {title: item.title, price: item.salesPrice, sku: item.sku}, // mit postoljunk?
        { headers: {'Content-Type': 'application/json'}} // hogyan?
      )
      .pipe<number>(
        map((data: any) => (data.id as number))
      )
  }
}
