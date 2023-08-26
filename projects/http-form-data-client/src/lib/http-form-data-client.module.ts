import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';

import { HttpFormDataClientService } from './http-form-data-client.service';
import {
  ClientOptions,
  HTTP_FORM_DATA_OPTIONS,
} from './interfaces';

@NgModule({
  imports: [CommonModule, HttpClientModule],
})
export class HttpFormDataClientModule {
  static forRoot(
    options: ClientOptions = {
      basePath: 'http://localhost:3333/api',
    },
  ): ModuleWithProviders<HttpFormDataClientModule> {
    return {
      ngModule: HttpFormDataClientModule,
      providers: [
        HttpFormDataClientService,
        {
          provide: HTTP_FORM_DATA_OPTIONS,
          useValue: options,
        },
      ],
    };
  }
}
