import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByCategoryListComponent } from './product-by-category-list.component';

describe('ProductByCategoryListComponent', () => {
  let component: ProductByCategoryListComponent;
  let fixture: ComponentFixture<ProductByCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductByCategoryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductByCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
