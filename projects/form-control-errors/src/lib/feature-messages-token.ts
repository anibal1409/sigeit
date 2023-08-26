import { InjectionToken } from '@angular/core';

import { ErrorMessages } from './models';

export const FEATURE_MESSAGES = new InjectionToken<ErrorMessages>(
  'common.messages'
);
