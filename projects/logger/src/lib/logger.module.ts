import { CommonModule } from '@angular/common';
import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';

import {
  LoggerConfig,
  LoggerConfigKey,
} from './interfaces';
import { LoggerService } from './logger.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [LoggerService],
})
export class LoggerModule {
  static forRoot(
    config: LoggerConfig = { allowConsole: true }
  ): ModuleWithProviders<LoggerModule> {
    return {
      ngModule: LoggerModule,
      providers: [
        { provide: LoggerConfigKey, useValue: config },
        LoggerService,
      ],
    };
  }
}
