import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysSchedulesComponent } from './days-schedules.component';

describe('DaysSchedulesComponent', () => {
  let component: DaysSchedulesComponent;
  let fixture: ComponentFixture<DaysSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaysSchedulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaysSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
