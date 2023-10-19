import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSchedulesComponent } from './student-schedules.component';

describe('StudentSchedulesComponent', () => {
  let component: StudentSchedulesComponent;
  let fixture: ComponentFixture<StudentSchedulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentSchedulesComponent]
    });
    fixture = TestBed.createComponent(StudentSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
