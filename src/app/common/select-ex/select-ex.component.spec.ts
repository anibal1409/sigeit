import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectExComponent } from './select-ex.component';

describe('SelectExComponent', () => {
  let component: SelectExComponent;
  let fixture: ComponentFixture<SelectExComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectExComponent]
    });
    fixture = TestBed.createComponent(SelectExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
