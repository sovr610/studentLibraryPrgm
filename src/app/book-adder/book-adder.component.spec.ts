import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAdderComponent } from './book-adder.component';

describe('BookAdderComponent', () => {
  let component: BookAdderComponent;
  let fixture: ComponentFixture<BookAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAdderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
