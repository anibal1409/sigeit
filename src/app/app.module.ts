import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './repositories/welcome/welcome.component';
import { SubjectsComponent } from './repositories/subjects/subjects.component';
import { ClassroomsComponent } from './repositories/classrooms/classrooms.component';
import { CareersComponent } from './repositories/careers/careers.component';
import { SettingsComponent } from './repositories/settings/settings.component';
import { DepartmentsComponent } from './repositories/departments/departments.component';
import { SchoolsComponent } from './repositories/schools/schools.component';
import { PeriodsComponent } from './repositories/periods/periods.component';
import { TeachersComponent } from './repositories/teachers/teachers.component';
@NgModule({
  declarations: [AppComponent, WelcomeComponent, SubjectsComponent, ClassroomsComponent, CareersComponent, SettingsComponent, DepartmentsComponent, SchoolsComponent, PeriodsComponent, TeachersComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
