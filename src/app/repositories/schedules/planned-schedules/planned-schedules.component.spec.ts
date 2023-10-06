import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedSchedulesComponent } from './planned-schedules.component';

describe('PlannedSchedulesComponent', () => {
  let component: PlannedSchedulesComponent;
  let fixture: ComponentFixture<PlannedSchedulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlannedSchedulesComponent]
    });
    fixture = TestBed.createComponent(PlannedSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
