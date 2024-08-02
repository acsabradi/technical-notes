
export class Product{
  id?: number; // lekérdezésnél benne lesz, viszont új létrehozásánál nem tudom beállítani
  title: string;
  salesPrice : number;
  sku : string;
  productImages: string[] = [];
  stock : number = 0;

  constructor(title: string, price: number, sku: string, id?: number){
    this.title = title;
    this.id = id;
    this.salesPrice = price;
    this.sku = sku;
  }




}
