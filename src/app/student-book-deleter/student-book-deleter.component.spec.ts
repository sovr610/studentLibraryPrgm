import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBookDeleterComponent } from './student-book-deleter.component';

describe('StudentBookDeleterComponent', () => {
  let component: StudentBookDeleterComponent;
  let fixture: ComponentFixture<StudentBookDeleterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentBookDeleterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBookDeleterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
