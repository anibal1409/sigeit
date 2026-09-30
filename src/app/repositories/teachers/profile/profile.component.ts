import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Router } from '@angular/router';

import {
  ResponseSubjectHistoryDto,
  ResponseTeacherDegreeDto,
} from 'dashboard-sdk';
import { Subscription } from 'rxjs';

import {
  CATEGORY_OPTIONS,
  DEDICATION_OPTIONS,
  DEGREE_LEVEL_OPTIONS,
  EMPLOYMENT_STATUS_OPTIONS,
  gradeLabel,
  HIRING_EVALUATION_OPTIONS,
  optionName,
  TeacherVM,
} from '../model';
import { TeacherAcademicService } from '../teacher-academic.service';

export interface ProfileData {
  teacher: Partial<TeacherVM>;
}

/** Perfil académico del profesor (solo lectura): escalafón, historial de asignaturas y títulos. */
@Component({
  selector: 'app-teacher-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  readonly optionName = optionName;
  readonly gradeLabel = gradeLabel;
  readonly categoryOptions = CATEGORY_OPTIONS;
  readonly employmentStatusOptions = EMPLOYMENT_STATUS_OPTIONS;
  readonly dedicationOptions = DEDICATION_OPTIONS;
  readonly hiringEvaluationOptions = HIRING_EVALUATION_OPTIONS;
  readonly levelOptions = DEGREE_LEVEL_OPTIONS;

  history: Array<ResponseSubjectHistoryDto> = [];
  degrees: Array<ResponseTeacherDegreeDto> = [];
  sub$ = new Subscription();

  constructor(
    private academicService: TeacherAcademicService,
    private router: Router,
    private dialogRef: MatDialogRef<ProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProfileData,
  ) {}

  ngOnInit(): void {
    const id = this.data.teacher.id || 0;
    this.sub$.add(
      this.academicService.getSubjectsHistory$(id).subscribe((history) => (this.history = history)),
    );
    this.sub$.add(this.academicService.getDegrees$(id).subscribe((degrees) => (this.degrees = degrees)));
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  manage(): void {
    this.dialogRef.close();
    this.router.navigate(['/dashboard/teachers/academic', this.data.teacher.id]);
  }
}
