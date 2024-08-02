import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from './model/Category.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // api kapcsolatot szeretnék készíteni -> kell a http client szolgáltatás
  http: HttpClient = inject(HttpClient); // b) az inject hívással végezzük el a külső elem befecskendézését

  constructor(/*private http : HttpClient*/) { } // a) konstruktorban a vsz megadásával jelezzük a injection igényt

  getData() {
    // http megfigyelhető elemet ad vissza
    const API_URL = 'https://dummyjson.com/products/categories';
    return this.http.get<any>(API_URL) // megfigyelhetővel tér vissza
                    .pipe(
                        map((data) => {
                            let records : Category[] = [];

                            for(let d of data){
                                records.push({
                                  name: d.name,
                                  slug: d.slug
                                })
                            }

                            return records;
                        })
                    )
  }

}
