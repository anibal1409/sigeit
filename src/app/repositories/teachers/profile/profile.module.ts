import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { ProfileComponent } from './profile.component';

/** Perfil académico en modal, reutilizable fuera del módulo de profesores. */
@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, MatTabsModule, MatExpansionModule],
  exports: [ProfileComponent],
})
export class TeacherProfileModule {}
