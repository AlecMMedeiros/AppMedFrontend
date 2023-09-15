import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicsListComponent } from './medics-list.component';

describe('MedicsListComponent', () => {
  let component: MedicsListComponent;
  let fixture: ComponentFixture<MedicsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicsListComponent]
    });
    fixture = TestBed.createComponent(MedicsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
