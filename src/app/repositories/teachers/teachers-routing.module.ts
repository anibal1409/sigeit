import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcademicComponent } from './academic/academic.component';
import { GradeSearchComponent } from './grade-search/grade-search.component';
import { TeachersComponent } from './teachers.component';

const routes: Routes = [
  { path: '', component: TeachersComponent },
  { path: 'search', component: GradeSearchComponent },
  { path: 'academic/:teacherId', component: AcademicComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachersRoutingModule {}
