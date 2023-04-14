import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesSemestersComponent } from './schedules-semesters.component';

describe('SchedulesSemestersComponent', () => {
  let component: SchedulesSemestersComponent;
  let fixture: ComponentFixture<SchedulesSemestersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulesSemestersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulesSemestersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
