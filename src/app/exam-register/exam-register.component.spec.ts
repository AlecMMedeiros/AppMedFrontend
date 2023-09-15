import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamRegisterComponent } from './exam-register.component';

describe('ExamRegisterComponent', () => {
  let component: ExamRegisterComponent;
  let fixture: ComponentFixture<ExamRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamRegisterComponent]
    });
    fixture = TestBed.createComponent(ExamRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
