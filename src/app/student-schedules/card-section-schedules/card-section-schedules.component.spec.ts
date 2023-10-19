import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSectionSchedulesComponent } from './card-section-schedules.component';

describe('CardSectionSchedulesComponent', () => {
  let component: CardSectionSchedulesComponent;
  let fixture: ComponentFixture<CardSectionSchedulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSectionSchedulesComponent]
    });
    fixture = TestBed.createComponent(CardSectionSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
