import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTodoComponent } from './delete-todo.component';

describe('DeleteTodoComponent', () => {
  let component: DeleteTodoComponent;
  let fixture: ComponentFixture<DeleteTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteTodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
