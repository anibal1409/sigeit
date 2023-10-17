import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { WelcomeComponent } from '../repositories/welcome/welcome.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: WelcomeComponent },
      {
        path: 'subjects',
        loadChildren: () =>
          import('../repositories/subjects/subjects.module').then(
            (m) => m.SubjectsModule
          ),
      },
      {
        path: 'classrooms',
        loadChildren: () =>
          import('../repositories/classrooms/classrooms.module').then(
            (m) => m.ClassroomsModule
          ),
      },
      {
        path: 'careers',
        loadChildren: () =>
          import('../repositories/careers/careers.module').then(
            (m) => m.CareersModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../repositories/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
      {
        path: 'departments',
        loadChildren: () =>
          import('../repositories/departments/departments.module').then(
            (m) => m.DepartmentsModule
          ),
      },
      {
        path: 'schools',
        loadChildren: () =>
          import('../repositories/schools/schools.module').then(
            (m) => m.SchoolsModule
          ),
      },
      {
        path: 'scheludes',
        loadChildren: () =>
          import('../repositories/schedules/schedules.module').then(
            (m) => m.SchedulesModule
          ),
      },
      {
        path: 'periods',
        loadChildren: () =>
          import('../repositories/periods/periods.module').then(
            (m) => m.PeriodsModule
          ),
      },
      {
        path: 'teachers',
        loadChildren: () =>
          import('../repositories/teachers/teachers.module').then(
            (m) => m.TeachersModule
          ),
      },
      {
        path: 'sections',
        loadChildren: () =>
          import('../repositories/sections/sections.module').then(
            (m) => m.SectionsModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../repositories/users/users.module').then(
            (m) => m.UsersModule
          ),
      },
      {
        path: 'formats',
        loadChildren: () => import('../repositories/documents/documents.module').then((m) => m.DocumentsModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
