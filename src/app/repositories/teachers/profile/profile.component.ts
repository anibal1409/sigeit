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
  SectionService,
} from 'dashboard-sdk';
import {
  filter,
  first,
  Subscription,
  switchMap,
  tap,
} from 'rxjs';

import { GlobalPeriodService } from '../../../common/global-period';
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

interface CurrentSection {
  sectionName: string;
  subjectCode: string;
  subjectName: string;
  hours: number;
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
  /** Secciones activas del período activo; undefined mientras carga */
  current?: Array<CurrentSection>;
  currentHours = 0;
  periodName = '';
  sub$ = new Subscription();

  constructor(
    private academicService: TeacherAcademicService,
    private sectionService: SectionService,
    private globalPeriodService: GlobalPeriodService,
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
    this.sub$.add(
      this.globalPeriodService
        .getActivePeriod$()
        .pipe(
          filter(Boolean),
          first(),
          tap((period) => (this.periodName = period.name)),
          switchMap((period) =>
            this.sectionService.sectionControllerFindAll(period.id || 0, undefined, undefined, id, undefined, undefined, true),
          ),
        )
        .subscribe((sections) => {
          this.current = sections
            .filter((section) => section.status)
            .map((section) => {
              const subject = section.subject as { code?: string; name?: string; hours?: number };
              return {
                sectionName: section.name,
                subjectCode: subject?.code || '',
                subjectName: subject?.name || '',
                hours: subject?.hours || 0,
              };
            })
            .sort((a, b) => a.subjectName.localeCompare(b.subjectName, 'es') || a.sectionName.localeCompare(b.sectionName));
          this.currentHours = this.current.reduce((sum, item) => sum + item.hours, 0);
        }),
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  manage(): void {
    this.dialogRef.close();
    this.router.navigate(['/dashboard/teachers/academic', this.data.teacher.id]);
  }
}
