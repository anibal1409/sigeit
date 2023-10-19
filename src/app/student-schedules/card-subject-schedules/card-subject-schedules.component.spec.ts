import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSubjectSchedulesComponent } from './card-subject-schedules.component';

describe('CardSubjectSchedulesComponent', () => {
  let component: CardSubjectSchedulesComponent;
  let fixture: ComponentFixture<CardSubjectSchedulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSubjectSchedulesComponent]
    });
    fixture = TestBed.createComponent(CardSubjectSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
