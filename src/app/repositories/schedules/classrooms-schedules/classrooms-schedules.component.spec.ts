import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomsSchedulesComponent } from './classrooms-schedules.component';

describe('ClassroomsSchedulesComponent', () => {
  let component: ClassroomsSchedulesComponent;
  let fixture: ComponentFixture<ClassroomsSchedulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomsSchedulesComponent]
    });
    fixture = TestBed.createComponent(ClassroomsSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
