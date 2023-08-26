/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
  Optional,
  ViewContainerRef,
} from '@angular/core';
import {
  AbstractControl,
  FormControlName,
  NgControl,
  ValidationErrors,
} from '@angular/forms';

import { Subscription } from 'rxjs';

import { COMMON_MESSAGES } from './common-messajes-token';
import { FEATURE_MESSAGES } from './feature-messages-token';
import { FormControlErrorsComponent } from './form-control-errors.component';
import { parseError } from './utils';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[formControlErrors]',
})
export class FormControlErrorsDirective implements OnInit, OnDestroy {
  private errorInfoComponent: ComponentRef<FormControlErrorsComponent> | null =
    null;
  private control: AbstractControl | null = null;
  private sub$ = new Subscription();

  @HostListener('blur')
  onBlur(): void {
    if (this.control) {
      this.validataStatus(this.control.status);
    }
  }

  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly viewContainerRef: ViewContainerRef,
    @Optional() private readonly formControlName: FormControlName,
    @Optional() private readonly formControl: NgControl,
    @Optional() @Inject(COMMON_MESSAGES) private readonly commonMessages: any,
    @Optional() @Inject(FEATURE_MESSAGES) private readonly featureMessages: any
  ) {}

  ngOnInit(): void {
    this.control = this.formControlName?.control || this.formControl?.control;

    if (!this.control) {
      throw new Error(
        'No control found, `vrt2FormControlErrors` must be used with `formControlName` or `formControl`'
      );
    }
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      FormControlErrorsComponent
    );
    this.errorInfoComponent = this.viewContainerRef.createComponent(factory);

    this.sub$.add(
      this.control.statusChanges?.subscribe((status) => {
        this.validataStatus(status);
      })
    );

    const container = (
      this.viewContainerRef.element.nativeElement as HTMLElement
    ).parentElement;

    if (container) {
      const errorc = container?.querySelector(
        'form-control-errors'
      ) as HTMLElement;
      if (errorc) {
        errorc.style.position = 'relative';
        errorc.style.left = `0.2rem`;
        errorc.style.fontSize = '0.8rem';
        errorc.style.color = 'red';
      }
    }
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  validataStatus(status: string): void {
    if (!this.errorInfoComponent) {
      throw new Error('No error info component found');
    }
    if (['INVALID', 'DISABLED'].includes(status) && this.control?.touched) {
      this.errorInfoComponent.instance.message = this.getMessage(
        this.control.errors as ValidationErrors
      );
    } else if (status === 'VALID') {
      this.errorInfoComponent.instance.message = '';
    }
  }

  getMessage(errors: ValidationErrors) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { message = '', args } = parseError(errors);
    const translateKey =
      (this.featureMessages && this.featureMessages[message]) ||
      (this.commonMessages && this.commonMessages[message]) ||
      message;
    return translateKey;
  }
}
