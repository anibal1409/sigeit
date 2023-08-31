import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { TableModule } from 'src/app/common';

import { StateModule } from '../../common/state';
import { FormComponent } from './form/form.component';
import { SchoolMemoryService } from './memory';
import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolsComponent } from './schools.component';
import { SchoolsService } from './schools.service';
import {
  CreateSchoolService,
  DeleteSchoolService,
  FindSchoolService,
  GetSchoolsService,
  UpdateSchoolService,
} from './use-cases';

@NgModule({
  declarations: [SchoolsComponent, FormComponent],
  imports: [
    CommonModule,
    SchoolsRoutingModule,
    TableModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    StateModule,
    MatSelectModule,
  ],
  providers: [
    SchoolsService,
    GetSchoolsService,
    SchoolMemoryService,
    CreateSchoolService,
    DeleteSchoolService,
    FindSchoolService,
    UpdateSchoolService,
  ],
})
export class SchoolsModule {}
