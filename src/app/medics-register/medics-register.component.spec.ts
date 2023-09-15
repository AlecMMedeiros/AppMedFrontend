import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicsRegisterComponent } from './medics-register.component';

describe('MedicsRegisterComponent', () => {
  let component: MedicsRegisterComponent;
  let fixture: ComponentFixture<MedicsRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicsRegisterComponent]
    });
    fixture = TestBed.createComponent(MedicsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
