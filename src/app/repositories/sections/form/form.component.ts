import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import {
  finalize,
  map,
  Observable,
  of,
  startWith,
  Subscription,
} from 'rxjs';
import { StateService } from 'src/app/common/state';

import { TeacherVM } from '../../teachers/model';
import { SectionVM } from '../model';
import { SectionsService } from '../sections.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  subjectId!: number;

  @Input()
  periodId!: number;

  @Input()
  sectionId!: number;

  @Output()
  closed = new EventEmitter();

  @Output()
  cancel = new EventEmitter();

  form!: FormGroup;
  loading = false;

  teachers: Array<TeacherVM> = [];
  sections: Array<SectionVM> = [];

  status: Array<{ id: boolean; name: string }> = [
    {
      id: true,
      name: 'Activo',
    },
    {
      id: false,
      name: 'Inactivo',
    },
  ];

  private sub$ = new Subscription();

  filteredTeachers = new Observable<TeacherVM[]>();
  submitDisabled = true;
  title = '';
  constructor(
    private sectionsService: SectionsService,
    private fb: FormBuilder,
    private stateService: StateService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (
      changes['subjectId']?.currentValue ||
      changes['periodId']?.currentValue
    ) {
      this.loadDataForm();
      this.loadLastSection();
    } else if (changes['sectionId']?.currentValue) {
      this.loadSection();
    }
  }

  ngOnInit(): void {
    this.createForm();
    this.loadLastSection();
    this.sub$.add(
      this.sectionsService.getTeachers$().subscribe((teachers) => {
        this.loading = true;
        this.stateService.setLoading(this.loading);
        this.teachers = teachers;
        if (teachers) {
          this.filteredTeachers = this.form.controls[
            'teacherId'
          ].valueChanges.pipe(
            startWith<string | TeacherVM>(''),
            map((value: any) => {
              if (value !== null) {
                return typeof value === 'string'
                  ? value
                  : `${value.last_name}, ${value.first_name}`;
              }
              return '';
            }),
            map((name: any) => {
              return name ? this._teacherFilter(name) : this.teachers.slice();
            })
          );
        }
        this.loading = false;
        setTimeout(() => this.stateService.setLoading(this.loading), 200);
      })
    );
    this.loadSection();
    this.sub$.add(
      this.form.get('teacherId')?.valueChanges.subscribe((teacher) => {
        if (teacher && teacher.id) {
          this.filteredTeachers = of(this.teachers);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  private loadSection(): void {
    if (this.sectionId) {
      this.title = 'Editar Sección';
      this.sub$.add(
        this.sectionsService
          .findSection$(this.sectionId)
          .subscribe((section) => {
            if (section) {
              this.form.patchValue({
                ...section,
              });
            }
          })
      );
    } else {
      this.title = 'Crear Sección';
    }
  }

  private loadDataForm(): void {
    this.form?.patchValue(
      {
        subjectId: this.subjectId,
        periodId: this.periodId,
      },
      { emitEvent: false }
    );
  }

  private loadLastSection(): void {
    if (!this.sectionId) {
      this.loading = true;
      this.stateService.setLoading(this.loading);
      this.sub$.add(
        this.sectionsService
          .getSections$(this.subjectId, this.periodId)
          .pipe(
            finalize(
              () => {
                this.loading = false;
                this.stateService.setLoading(this.loading);
              }
            )
          )
          .subscribe((sections) => {
            this.sections = sections;
            if (sections?.length) {
              const lastSection = sections?.reduce((prev, current) => {
                return +prev.name > +current.name ? prev : current;
              });
              if (lastSection) {
                this.form.patchValue({
                  name: +lastSection.name + 1,
                });
              }
            }
          })
      );
    }
  }

  private createForm(): void {
    this.form = this.fb.group({
      subjectId: [this.subjectId, [Validators.required]],
      periodId: [this.periodId, [Validators.required]],
      teacherId: [null, [Validators.required]],
      name: [1, [Validators.required, Validators.min(0)]],
      status: [true, [Validators.required]],
      capacity: [0, [Validators.required, Validators.min(1)]],
    });

    this.sub$.add(
      this.form.valueChanges.subscribe(() => {
        this.submitDisabled = this.form.invalid;
      })
    );
  }

  save(): void {
    const section = this.form.value;
    section.subjectId = section?.subjectId?.id || section?.subjectId;
    section.teacherId = section?.teacherId?.id || section?.teacherId;
    let obs;
    section.name = +section.name < 10 ? `0${+section.name}` : section.name;
    if (this.sectionId) {
      section.id = this.sectionId;
      obs = this.sectionsService.updateSection$(section);
    } else {
      obs = this.sectionsService.createSection$(section);
    }

    this.sub$.add(
      obs.subscribe(() => {
        this.sectionId = 0;
        this.form.reset();
        this.loadDataForm();
        this.closed.emit();
      })
    );
  }

  clickCancel(): void {
    this.cancel.emit();
  }

  displayFn(item: TeacherVM): string {
    if (item) {
      if (item.last_name == '') {
        return item.first_name;
      } else {
        return `${item.last_name},  ${item.first_name}`;
      }
    } else return '';
  }

  private _teacherFilter(name: string): TeacherVM[] {
    const filterValue = name.toLowerCase();
    return this.teachers.filter(
      (option) => option.last_name.toLowerCase().indexOf(filterValue) === 0
    );
  }
}
