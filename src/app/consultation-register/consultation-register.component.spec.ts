import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationsRegisterComponent } from './consultation-register.component';

describe('ConsultationRegisterComponent', () => {
  let component: ConsultationsRegisterComponent;
  let fixture: ComponentFixture<ConsultationsRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultationsRegisterComponent]
    });
    fixture = TestBed.createComponent(ConsultationsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
