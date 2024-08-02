import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  // a példány létrehozásáért felel (ekkor nem látható a komponens)
  // függök a productService-től, ezért injektálom
  constructor(private pService: ProductService){}
  isLoading: boolean = false;
  isError: boolean = false;
  error?: string;
  data : Product[] = [];

  // az adatok lekérését a komponens inicializálása után
  // automatikusan szeretném elindítani
  // -> feliratkozom a megfelelő életciklus eseményre
  // -> az inicializálás az OnInit eseményhez kapcsolódik
  //  1) implemenátlni kell a megfelelő interface-t
  //  2) implementálni kell a megfelelő metódus-t
  ngOnInit(): void {
    // mivel cél az api lekérés, innen indítom a lekérés folyamatát
    this.loadData();
  }

  loadData(){ //adatok lekérése
    this.isLoading = true; // elkezdem az adatok feldolgozáságát
    this.pService.getData()
        .subscribe({
          next: (data : Product[]) => { // sikeres végrehajtás
            this.data = data;
            this.isLoading = false;
            this.isError = false;
            this.error = '';
          },
          error: (error: Error) => { // sikertelen végrehajtás
            this.data = [];
            this.isLoading = false;
            this.isError = true;
            this.error = error.message;
          }
        });

  }
}
