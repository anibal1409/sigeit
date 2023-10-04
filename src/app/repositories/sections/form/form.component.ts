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
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Subscription } from 'rxjs';

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

  @Input()
  departmentId!: number;

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

  submitDisabled = true;
  title = '';

  allTeachersCtrl = new FormControl(false);

  constructor(
    private sectionsService: SectionsService,
    private fb: FormBuilder,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['subjectId']?.currentValue ||
      changes['periodId']?.currentValue
    ) {
      this.loadDataForm();
      this.loadLastSection();
      this.loadTeachers();
    } else if (changes['sectionId']?.currentValue) {
      this.loadSection();
    }
  }

  ngOnInit(): void {
    this.sub$.add(
      this.sectionsService.getLoading$().subscribe((loading) => {
        this.loading = loading;
      })
    );
    this.createForm();
    this.loadLastSection();
    this.loadSection();
    this.loadTeachers();
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  private loadTeachers(): void {
    this.sub$.add(
      this.sectionsService
        .getTeachers$(this.allTeachersCtrl.value ? undefined : this.departmentId)
        .subscribe((teachers) => {
          this.teachers = teachers;
          this.loadSection();
        })
    );
  }

  private loadSection(): void {
    if (this.sectionId) {
      this.title = 'Editar Sección';
      this.sub$.add(
        this.sectionsService
          .find$({
            id: this.sectionId,
          })
          .subscribe((section) => {
            if (section) {
              this.form?.patchValue({
                ...section
              }, { emitEvent: false });
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
    this.sub$.add(
      this.sectionsService.getData$().subscribe((data) => {
        this.sections = data as any;
        if (data?.length) {
          const lastSection = data?.reduce((prev, current) => {
            return +prev.name > +current.name ? prev : current;
          });
          if (lastSection) {
            this.form?.patchValue({
              name: +lastSection.name + 1,
            });
          }
        }
      })
    );
    if (!this.sectionId) {
      this.sub$.add(
        this.sectionsService
          .get({
            subjectId: this.subjectId,
            periodId: this.periodId,
          })
      );
    }
  }

  private createForm(): void {
    this.form = this.fb.group({
      subjectId: [this.subjectId, [Validators.required]],
      periodId: [this.periodId, [Validators.required]],
      teacherId: [null, [Validators.required]],
      name: ['01', [Validators.required, Validators.min(0)]],
      status: [true, [Validators.required]],
      capacity: [0, [Validators.required, Validators.min(1)]],
    });

    this.sub$.add(
      this.form.valueChanges.subscribe(() => {
        this.submitDisabled = this.form.invalid;
      })
    );

    this.sub$.add(
      this.allTeachersCtrl.valueChanges.subscribe(
        () => {
          this.loadTeachers();
        }
      )
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
      obs = this.sectionsService.update(section);
    } else {
      obs = this.sectionsService.create(section);
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
}
