import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './repositories/welcome/welcome.component';
import { SubjectsModule } from './repositories/subjects/subjects.module';
import { ClassroomsModule } from './repositories/classrooms/classrooms.module';
import { CareersModule } from './repositories/careers/careers.module';
import { SettingsModule } from './repositories/settings/settings.module';
import { DepartmentsModule } from './repositories/departments/departments.module';
import { SchoolsModule } from './repositories/schools/schools.module';
import { PeriodsModule } from './repositories/periods/periods.module';
import { TeachersModule } from './repositories/teachers/teachers.module';
@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SubjectsModule,
    ClassroomsModule,
    CareersModule,
    SettingsModule,
    DepartmentsModule,
    SchoolsModule,
    PeriodsModule,
    TeachersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
