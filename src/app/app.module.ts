import { HttpClientModule } from '@angular/common/http';
import {
  ErrorHandler,
  forwardRef,
  NgModule,
} from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  ApiModule,
  Configuration,
} from 'dashboard-sdk';
import {
  ErrorHandlerModule,
  ErrorHandlerService,
} from 'error-handler';
import { HttpFormDataClientModule } from 'http-form-data-client';

import {
  ToastModule,
  ToastService,
} from '../../libs/toast/src';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { StateModule } from './common/state';
import { CareersModule } from './repositories/careers/careers.module';
import { ClassroomsModule } from './repositories/classrooms/classrooms.module';
import {
  DepartmentsModule,
} from './repositories/departments/departments.module';
import { PeriodsModule } from './repositories/periods/periods.module';
import { SchoolsModule } from './repositories/schools/schools.module';
import { SettingsModule } from './repositories/settings/settings.module';
import { SubjectsModule } from './repositories/subjects/subjects.module';
import { TeachersModule } from './repositories/teachers/teachers.module';
import { WelcomeComponent } from './repositories/welcome/welcome.component';

function apiConfigFactory(): Configuration {
  return new Configuration({
    basePath: environment.apiBasePath,
    withCredentials: true,
  });
}

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StateModule,
    AuthModule,
    SubjectsModule,
    ClassroomsModule,
    CareersModule,
    SettingsModule,
    DepartmentsModule,
    SchoolsModule,
    PeriodsModule,
    TeachersModule,
    HttpClientModule,
    MatDialogModule,
    MatTooltipModule,
    ApiModule.forRoot(apiConfigFactory),
    ToastModule.forRoot(),
    ErrorHandlerModule.forRoot({
      alertService: forwardRef(() => ToastService),
      alertMethodName: 'error',
      alertClientErrors: true,
      loggerConfig: {
        allowConsole: true,
      },
    }),
    HttpFormDataClientModule.forRoot({
      basePath: environment.apiBasePath,
      httpOptions: {
        withCredentials: true,
      },
    }),
  ],
  providers: [
    {
      provide: ErrorHandler,
      useExisting: forwardRef(() => ErrorHandlerService),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
