import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglePasswordViewComponent } from './toggle-password-view.component';

describe('TogglePasswordViewComponent', () => {
  let component: TogglePasswordViewComponent;
  let fixture: ComponentFixture<TogglePasswordViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TogglePasswordViewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TogglePasswordViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
