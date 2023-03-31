import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheludesComponent } from './scheludes.component';

describe('ScheludesComponent', () => {
  let component: ScheludesComponent;
  let fixture: ComponentFixture<ScheludesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheludesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheludesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
