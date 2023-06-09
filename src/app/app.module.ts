import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
