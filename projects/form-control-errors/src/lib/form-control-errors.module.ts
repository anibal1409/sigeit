import { ModuleWithProviders, NgModule } from '@angular/core';

import { COMMON_MESSAGES } from './common-messajes-token';
import { FEATURE_MESSAGES } from './feature-messages-token';
import { FormControlErrorsComponent } from './form-control-errors.component';
import { FormControlErrorsDirective } from './form-control-errors.directive';
import { ErrorMessages } from './models';

@NgModule({
  declarations: [FormControlErrorsComponent, FormControlErrorsDirective],
  imports: [],
  exports: [FormControlErrorsComponent, FormControlErrorsDirective],
})
export class FormControlErrorsModule {
  static forRoot(
    commonMessages: ErrorMessages
  ): ModuleWithProviders<FormControlErrorsModule> {
    return {
      ngModule: FormControlErrorsModule,
      providers: [
        {
          provide: COMMON_MESSAGES,
          useValue: commonMessages,
        },
      ],
    };
  }

  static forChild(
    featureMessages?: ErrorMessages
  ): ModuleWithProviders<FormControlErrorsModule> {
    return {
      ngModule: FormControlErrorsModule,
      providers: [
        {
          provide: FEATURE_MESSAGES,
          useValue: featureMessages,
        },
      ],
    };
  }
}
