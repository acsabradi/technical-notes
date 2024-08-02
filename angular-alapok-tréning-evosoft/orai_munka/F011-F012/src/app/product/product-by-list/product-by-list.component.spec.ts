import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByListComponent } from './product-by-list.component';

describe('ProductByListComponent', () => {
  let component: ProductByListComponent;
  let fixture: ComponentFixture<ProductByListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductByListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductByListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
