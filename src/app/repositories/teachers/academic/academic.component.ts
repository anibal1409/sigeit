import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import {
  ResponseSubjectHistoryDto,
  ResponseTeacherDegreeDto,
  ResponseTeacherDto,
  TeacherService,
  TranscriptPreviewDto,
} from 'dashboard-sdk';
import {
  finalize,
  map,
  of,
  Subscription,
  switchMap,
} from 'rxjs';
import {
  ConfirmModalComponent,
  uploadSizeError,
  UserStateService,
} from 'src/app/common';

import {
  CATEGORY_OPTIONS,
  DEDICATION_OPTIONS,
  DEGREE_LEVEL_OPTIONS,
  optionName,
} from '../model';
import { TeacherAcademicService } from '../teacher-academic.service';

interface Editing {
  degree?: ResponseTeacherDegreeDto;
  preview?: TranscriptPreviewDto;
  file?: File;
}

/** Registro de títulos y notas, con cambio rápido entre los profesores del departamento. */
@Component({
  selector: 'app-teacher-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.scss'],
})
export class AcademicComponent implements OnInit, OnDestroy {
  readonly optionName = optionName;
  readonly categoryOptions = CATEGORY_OPTIONS;
  readonly dedicationOptions = DEDICATION_OPTIONS;
  readonly levelOptions = DEGREE_LEVEL_OPTIONS;

  teachers: Array<ResponseTeacherDto> = [];
  teacher?: ResponseTeacherDto;
  searchCtrl = new FormControl<string | ResponseTeacherDto>('');
  filteredTeachers: Array<ResponseTeacherDto> = [];
  degrees: Array<ResponseTeacherDegreeDto> = [];
  history: Array<ResponseSubjectHistoryDto> = [];
  editing: Editing | null = null;
  reading = false;
  error = '';

  private sub$ = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teacherService: TeacherService,
    private academicService: TeacherAcademicService,
    private userStateService: UserStateService,
    private matDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    const departmentId = this.userStateService.getDepartmentId() || undefined;
    const teachers$ = this.teacherService
      .teacherControllerFindAll(this.userStateService.getSchoolId(), departmentId)
      .pipe(
        map((teachers) =>
          teachers
            .filter((teacher) => !fullName(teacher).toLowerCase().includes('por asignar'))
            .sort((a, b) => fullName(a).localeCompare(fullName(b), 'es')),
        ),
      );
    this.sub$.add(
      teachers$.subscribe((teachers) => {
        this.teachers = teachers;
        this.filter();
      }),
    );
    this.sub$.add(
      this.route.paramMap
        .pipe(
          map((params) => Number(params.get('teacherId'))),
          switchMap((id) => {
            const known = this.teachers.find((teacher) => teacher.id === id);
            return known ? of(known) : this.teacherService.teacherControllerFindOne(id);
          }),
        )
        .subscribe((teacher) => this.select(teacher)),
    );
    this.sub$.add(this.searchCtrl.valueChanges.subscribe(() => this.filter()));
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  get index(): number {
    return this.teachers.findIndex((teacher) => teacher.id === this.teacher?.id);
  }

  displayTeacher = (teacher: ResponseTeacherDto | string | null): string =>
    typeof teacher === 'string' ? teacher : teacher ? fullName(teacher) : '';

  go(teacher?: ResponseTeacherDto): void {
    if (teacher && teacher.id !== this.teacher?.id) {
      this.router.navigate(['/dashboard/teachers/academic', teacher.id]);
    }
  }

  step(offset: number): void {
    this.go(this.teachers[this.index + offset]);
  }

  importTranscript(input: HTMLInputElement): void {
    const file = input.files?.[0];
    input.value = '';
    this.error = uploadSizeError(file);
    if (!file || this.error) {
      return;
    }
    this.reading = true;
    this.academicService
      .parseTranscript$(file)
      .pipe(finalize(() => (this.reading = false)))
      .subscribe((preview) => (this.editing = { preview, file }));
  }

  closeForm(saved: boolean): void {
    this.editing = null;
    if (saved) this.loadDegrees();
  }

  deleteDegree(degree: ResponseTeacherDegreeDto): void {
    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'Eliminar título',
          body: `¿Está seguro que desea eliminar el título <strong>${degree.title}</strong> y sus notas?`,
        },
      },
      hasBackdrop: true,
      disableClose: true,
    });
    dialogRef.componentInstance.closed.subscribe((confirmed: boolean) => {
      dialogRef.close();
      if (confirmed) {
        this.academicService.deleteDegree$(degree.id).subscribe(() => this.loadDegrees());
      }
    });
  }

  private select(teacher: ResponseTeacherDto): void {
    this.teacher = teacher;
    this.editing = null;
    this.error = '';
    this.degrees = [];
    this.history = [];
    this.searchCtrl.setValue(teacher, { emitEvent: false });
    this.filter();
    this.loadDegrees();
    this.sub$.add(
      this.academicService.getSubjectsHistory$(teacher.id).subscribe((history) => (this.history = history)),
    );
  }

  private loadDegrees(): void {
    const id = this.teacher?.id;
    if (!id) return;
    this.sub$.add(
      this.academicService.getDegrees$(id).subscribe((degrees) => id === this.teacher?.id && (this.degrees = degrees)),
    );
  }

  private filter(): void {
    const value = this.searchCtrl.value;
    const words = typeof value === 'string' ? normalize(value).split(' ').filter(Boolean) : [];
    this.filteredTeachers = this.teachers
      .filter((teacher) => words.every((word) => normalize(`${fullName(teacher)} ${teacher.idDocument}`).includes(word)))
      .slice(0, 30);
  }
}

function fullName(teacher: ResponseTeacherDto): string {
  return `${teacher.lastName || ''}, ${teacher.firstName || ''}`;
}

function normalize(text: string): string {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}
