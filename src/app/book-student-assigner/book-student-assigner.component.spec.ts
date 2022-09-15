import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStudentAssignerComponent } from './book-student-assigner.component';

describe('BookStudentAssignerComponent', () => {
  let component: BookStudentAssignerComponent;
  let fixture: ComponentFixture<BookStudentAssignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookStudentAssignerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookStudentAssignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
