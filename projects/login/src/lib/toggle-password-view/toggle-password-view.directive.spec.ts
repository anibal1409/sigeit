import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TogglePasswordViewComponent } from './toggle-password-view.component';
import { TogglePasswordViewDirective } from './toggle-password-view.directive';

@Component({
  selector: 'vrt2-toggle-test',
  template: `
    <div class="input-group">
      <input type="password" vrt2TogglePasswordView />
    </div>
  `,
})
class DummyTestComponent {}

describe('TogglePasswordViewDirective', () => {
  let directive: DebugElement | null = null;
  let fixture: ComponentFixture<DummyTestComponent> | null = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TogglePasswordViewDirective,
        DummyTestComponent,
        TogglePasswordViewComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DummyTestComponent);
    fixture.detectChanges();
    directive = fixture.debugElement.query(
      By.directive(TogglePasswordViewDirective)
    );
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
