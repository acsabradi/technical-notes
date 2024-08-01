import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F004Component } from './f004.component';

describe('F004Component', () => {
  let component: F004Component;
  let fixture: ComponentFixture<F004Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F004Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
