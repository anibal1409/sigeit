import { Component, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'form-control-errors',
  template: `{{ message }}`,
  styles: [],
})
export class FormControlErrorsComponent {
  @Input()
  message = '';
}
