import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

import { GradeSearchComponent } from './grade-search/grade-search.component';
import { ProfileComponent } from './profile/profile.component';

/** Perfil académico y búsqueda por asignatura, reutilizables en modal fuera del módulo de profesores. */
@NgModule({
  declarations: [ProfileComponent, GradeSearchComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  exports: [ProfileComponent, GradeSearchComponent],
})
export class TeacherAcademicModule {}
