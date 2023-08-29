import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { LoginComponent } from './login/login.component';
import {
  RecoveryPasswordComponent,
} from './recovery-password/recovery-password.component';
import {
  ResetPasswordComponent,
} from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'recovery-password',
        component: RecoveryPasswordComponent,
      },
      {
        path: 'reset-password/:token',
        component: ResetPasswordComponent,
      },
      {
        path: '**',
        redirectTo: '/auth/login',
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/auth/login',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
