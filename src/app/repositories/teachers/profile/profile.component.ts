import {
  ChangeDetectorRef,
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
  ResponseScheduleDto,
  ResponseSubjectHistoryDto,
  ResponseTeacherDegreeDto,
  ScheduleService,
  SectionService,
} from 'dashboard-sdk';
import {
  filter,
  first,
  forkJoin,
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
  HIRING_EVALUATION_OPTIONS,
  optionName,
  TeacherVM,
} from '../model';
import { TeacherAcademicService } from '../teacher-academic.service';

export interface ProfileData {
  teacher: Partial<TeacherVM>;
}

/** Tamaño del diálogo de perfil: alto casi a pantalla completa para ver horario y tablas. */
export const PROFILE_DIALOG = {
  width: '80rem',
  maxWidth: '96vw',
  height: '90vh',
  maxHeight: '90vh',
  panelClass: 'teacher-profile-dialog',
} as const;

interface CurrentSection {
  sectionName: string;
  subjectCode: string;
  subjectName: string;
  hours: number;
}

/** Alto en rem de una hora en la grilla del horario. */
const HOUR_REM = 2.75;
/** Margen superior para que la etiqueta de la primera hora no se corte. */
const HOUR_PAD = 0.5;

interface WeekBlock {
  start: string;
  end: string;
  top: number;
  height: number;
  subjectCode: string;
  subjectName: string;
  sectionName: string;
  classroom: string;
  color: number;
}

interface Week {
  days: Array<{ name: string; blocks: Array<WeekBlock> }>;
  hours: Array<string>;
  height: number;
  pad: number;
}

/** Perfil académico del profesor (solo lectura): escalafón, historial de asignaturas y títulos. */
@Component({
  selector: 'app-teacher-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  readonly optionName = optionName;
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
  /** Horario semanal del período activo; undefined mientras carga */
  week?: Week;
  readonly hourRem = HOUR_REM;
  readonly hourPad = HOUR_PAD;
  periodName = '';
  sub$ = new Subscription();

  constructor(
    private academicService: TeacherAcademicService,
    private sectionService: SectionService,
    private scheduleService: ScheduleService,
    private globalPeriodService: GlobalPeriodService,
    private router: Router,
    private dialogRef: MatDialogRef<ProfileComponent>,
    private cdr: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: ProfileData,
  ) {}

  ngOnInit(): void {
    const id = this.data.teacher.id || 0;
    this.sub$.add(
      this.academicService.getSubjectsHistory$(id).subscribe((history) => {
        this.history = history;
        this.cdr.detectChanges();
      }),
    );
    this.sub$.add(this.academicService.getDegrees$(id).subscribe((degrees) => {
      this.degrees = degrees;
      this.cdr.detectChanges();
    }));
    this.sub$.add(
      this.globalPeriodService
        .getActivePeriod$()
        .pipe(
          filter(Boolean),
          first(),
          tap((period) => (this.periodName = period.name)),
          switchMap((period) => forkJoin([
            this.sectionService.sectionControllerFindAll(period.id || 0, undefined, undefined, id, undefined, undefined, true),
            this.scheduleService.scheduleControllerFindAll(
              period.id || 0, undefined, undefined, period.id, id, undefined, undefined, undefined, undefined, true,
            ),
          ])),
        )
        .subscribe(([sections, schedules]) => {
          this.week = buildWeek(schedules);
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
          this.cdr.detectChanges();
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

/** Ubica los bloques del horario en una grilla por día, de la primera a la última hora con clases. */
function buildWeek(schedules: Array<ResponseScheduleDto>): Week {
  type Item = ResponseScheduleDto & {
    day?: { id?: number; name?: string };
    classroom?: { name?: string };
    section?: { name?: string; status?: boolean; subject?: { id?: number; code?: string; name?: string } };
  };
  const items = (schedules as Array<Item>).filter((item) => item.section?.status !== false);
  if (!items.length) {
    return { days: [], hours: [], height: 0, pad: HOUR_PAD };
  }
  const minutes = (time: string) => +time.slice(0, 2) * 60 + +time.slice(3, 5);
  const from = Math.floor(Math.min(...items.map((item) => minutes(item.start))) / 60);
  const to = Math.ceil(Math.max(...items.map((item) => minutes(item.end))) / 60);
  const subjects = [...new Set(items.map((item) => item.section?.subject?.id))];

  const days = new Map<number, { name: string; blocks: Array<WeekBlock> }>();
  [...items]
    .sort((a, b) => (a.day?.id || 0) - (b.day?.id || 0) || a.start.localeCompare(b.start))
    .forEach((item) => {
      const day = days.get(item.day?.id || 0) || { name: item.day?.name || '', blocks: [] };
      days.set(item.day?.id || 0, day);
      day.blocks.push({
        start: item.start,
        end: item.end,
        top: HOUR_PAD + ((minutes(item.start) - from * 60) / 60) * HOUR_REM,
        height: ((minutes(item.end) - minutes(item.start)) / 60) * HOUR_REM,
        subjectCode: item.section?.subject?.code || '',
        subjectName: item.section?.subject?.name || '',
        sectionName: item.section?.name || '',
        classroom: item.classroom?.name || '',
        color: subjects.indexOf(item.section?.subject?.id) % 6,
      });
    });

  return {
    days: [...days.values()],
    hours: Array.from({ length: to - from }, (_, index) => `${String(from + index).padStart(2, '0')}:00`),
    height: HOUR_PAD + (to - from) * HOUR_REM,
    pad: HOUR_PAD,
  };
}
