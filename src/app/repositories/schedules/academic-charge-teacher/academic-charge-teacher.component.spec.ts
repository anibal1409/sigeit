import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicChargeTeacherComponent } from './academic-charge-teacher.component';

describe('AcademicChargeTeacherComponent', () => {
  let component: AcademicChargeTeacherComponent;
  let fixture: ComponentFixture<AcademicChargeTeacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcademicChargeTeacherComponent]
    });
    fixture = TestBed.createComponent(AcademicChargeTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
