import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CareersModule } from '../repositories/careers';
import { AuthRoutingModule } from './auth-routing.module';
import {
  LoginComponent,
  LoginService,
} from './login';
import { RecoveryPasswordComponent } from './recovery-password';
import { ResetPasswordComponent } from './reset-password';
import {
  SignUpComponent,
  SignUpService,
} from './sign-up';
import { CreateUserStudentService } from './use-cases';

@NgModule({
  declarations: [
    LoginComponent,
    RecoveryPasswordComponent,
    ResetPasswordComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatSelectModule,
    CareersModule,
  ],
  providers: [
    LoginService,
    SignUpService,
    CreateUserStudentService,
  ]
})
export class AuthModule {}
