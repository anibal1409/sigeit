import { InjectionToken } from '@angular/core';

import { ErrorMessages } from './models';

export const COMMON_MESSAGES = new InjectionToken<ErrorMessages>(
  'common.messages'
);
