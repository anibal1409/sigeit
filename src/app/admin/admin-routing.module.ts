import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from '../repositories/welcome/welcome.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'subjects', component: WelcomeComponent },
      { path: 'classrooms', component: WelcomeComponent },
      { path: 'careers', component: WelcomeComponent },
      { path: 'config', component: WelcomeComponent },
      { path: 'dedications', component: WelcomeComponent },
      { path: 'departments', component: WelcomeComponent },
      { path: 'schools', component: WelcomeComponent },
      {
        path: 'scheludes',
        loadChildren: () =>
          import('../repositories/scheludes/scheludes.module').then(
            (m) => m.ScheludesModule
          ),
      },
      { path: 'periods', component: WelcomeComponent },
      { path: 'teachers', component: WelcomeComponent },
      {
        path: 'sections',
        loadChildren: () =>
          import('../repositories/sections/sections.module').then(
            (m) => m.SectionsModule
          ),
      },
      { path: 'users', component: WelcomeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
