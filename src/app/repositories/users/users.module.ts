import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersService } from './users.service';
import { TableModule } from '../common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { UsersMemoryService } from './memory';
import {
  CreateUserService,
  UpdateUsersService,
  DeleteUserService,
  GetUsersService,
  FindUserService,
} from './use-cases';
import { FormComponent } from './form/form.component';
import { ViewComponent } from './view/view.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [UsersComponent, FormComponent, ViewComponent],
  providers: [
    UsersService,
    CreateUserService,
    UpdateUsersService,
    DeleteUserService,
    GetUsersService,
    FindUserService,
    UsersMemoryService,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    TableModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class UsersModule {}
