import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import { StateModule } from '../../common/state';
import { TableModule } from '../../common/table/';
import { GetDepartmentsService } from '../departments';
import { FormComponent } from './form/form.component';
import { UserMemoryService } from './memory';
import {
  CreateUserService,
  DeleteUserService,
  FindUserService,
  UpdateUserService,
} from './use-cases';
import { GetUsersService } from './use-cases/get-users/get-users.service';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersService } from './users.service';

@NgModule({
  declarations: [UsersComponent, FormComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatCardModule,
    TableModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatAutocompleteModule,
    StateModule,
  ],
  providers: [
    UsersService,
    GetUsersService,
    GetDepartmentsService,
    CreateUserService,
    UpdateUserService,
    DeleteUserService,
    FindUserService,
    UserMemoryService,
  ],
})
export class UsersModule {}
