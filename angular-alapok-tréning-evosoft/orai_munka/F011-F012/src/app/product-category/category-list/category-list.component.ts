import { Component, inject } from '@angular/core';
import { CategoryService } from '../../category.service';
import { Category } from '../../model/Category.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  // szükségem van a categoryService-re, mivel azt használni szeretném a későbbiekben adatcseréhez
  categoryService = inject(CategoryService);
  data1 : Category[] = [];
  data2$ : Observable<Category[]>;

  constructor(){
    this.loadData();
    this.data2$ = this.categoryService.getData();
  }

  loadData(){
    // a kért adatokat elmentem, mint egy kategória tömb
    // this.data = this.categoryService.getData();
    this.categoryService.getData().subscribe({
      next: (data) => { this.data1 = data; console.log(this.data1);}
    })
  }
}
