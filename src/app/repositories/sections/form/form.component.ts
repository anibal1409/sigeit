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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { map, Observable, startWith, Subscription } from 'rxjs';
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

  constructor(
    private sectionsService: SectionsService,
    private fb: FormBuilder,
    private stateService: StateService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['subjectId']?.currentValue ||
      changes['periodId']?.currentValue
    ) {
      this.loadDataForm();
      this.loadLastSection();
    }
  }

  ngOnInit(): void {
    this.createForm();
    this.loadLastSection();
    this.sub$.add(
      this.sectionsService.getTeachers$().subscribe((teachers) => {
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
      })
    );
    if (this.sectionId) {
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
    }
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
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
    this.loading = true;
    this.stateService.setLoading(this.loading);
    if (!this.sectionId) {
      this.sub$.add(
        this.sectionsService
          .getSections$(this.subjectId, this.periodId)
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
            this.loading = false;
            setTimeout(() => this.stateService.setLoading(this.loading), 200);
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
