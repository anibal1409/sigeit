import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import { TranslateService } from '@ngx-translate/core';

import { FormControlErrorsDirective } from './form-control-errors.directive';

// Dummy component to test the directive
@Component({
  template: `
    <form [formGroup]="form">
      <div>
        <label>Name</label>
        <input type="text" vrt2FormControlErrors formControlName="name" />
      </div>
    </form>
  `,
})
class FormControlTestComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
    });
  }
}

describe('FormControlErrorsDirective', () => {
  let fixture: ComponentFixture<FormControlTestComponent>;
  let controls: DebugElement[];
  const fakeTranslateService: Partial<TranslateService> = {
    instant: (key: string) => key,
  };

  beforeEach(async () => {
    // Configure testing environment
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FormControlErrorsDirective, FormControlTestComponent],
      providers: [
        {
          provide: TranslateService,
          useValue: fakeTranslateService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FormControlTestComponent);
    fixture.detectChanges();
    controls = fixture.debugElement.queryAll(
      By.directive(FormControlErrorsDirective)
    );
  });

  it('should have one control', () => {
    expect(controls.length).toBe(1);
  });

  it('should create a `form-control-errors`', () => {
    const errorComponent = fixture.debugElement.query(
      By.css('form-control-errors')
    );

    expect(errorComponent).toBeTruthy();
  });

  it('should trigger `blur` event', () => {
    const input = controls[0];
    const control = controls[0].injector.get(FormControlErrorsDirective);
    spyOn(control, 'onBlur');
    input.triggerEventHandler('blur', null);
    fixture.detectChanges();

    expect(control.onBlur).toHaveBeenCalled();
  });

  it('should not show errors before the control is touched', () => {
    const errorComponent = fixture.debugElement.query(
      By.css('form-control-errors')
    );

    expect(errorComponent.nativeElement.innerText).toBe('');
  });

  it('should show errors after the control is touched', () => {
    const errorComponent = fixture.debugElement.query(
      By.css('form-control-errors')
    );

    controls[0].triggerEventHandler('blur', null);
    fixture.detectChanges();

    expect(errorComponent.nativeElement.innerText).toBe('required');
  });

  it('should call `validataStatus` funcion after input change', () => {
    const input = controls[0];
    const control = controls[0].injector.get(FormControlErrorsDirective);
    spyOn(control, 'validataStatus');
    input.triggerEventHandler('input', { target: { value: 'test' } });
    fixture.detectChanges();

    expect(control.validataStatus).toHaveBeenCalled();
  });

  it('should hide errors after the control is filled', () => {
    const input = controls[0];
    const errorComponent = fixture.debugElement.query(
      By.css('form-control-errors')
    );

    input.triggerEventHandler('blur', null);
    fixture.detectChanges();

    input.triggerEventHandler('input', { target: { value: 'test' } });
    fixture.detectChanges();

    expect(errorComponent.nativeElement.innerText).toBe('');
  });
});
