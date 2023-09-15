import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationsListComponent } from './consultation-list.component';

describe('ConsultationListComponent', () => {
  let component: ConsultationsListComponent;
  let fixture: ComponentFixture<ConsultationsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultationsListComponent]
    });
    fixture = TestBed.createComponent(ConsultationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
