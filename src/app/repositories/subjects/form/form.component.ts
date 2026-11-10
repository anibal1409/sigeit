import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { isEqual } from 'lodash';
import { Subscription } from 'rxjs';

import { UserStateService } from '../../../common/user-state';
import { CareerVM } from '../../careers';
import { DepartmentItemVM } from '../../departments';
import { TeacherVM } from '../../teachers';
import {
  instructionTypeFromHours,
  SUBJECT_INSTRUCTION_LABEL,
  SubjectVM,
  subjectHoursValidator,
} from '../model';
import { SubjectsService } from '../subjects.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  @Input()
  id!: number;

  @Output()
  closed = new EventEmitter();

  form!: FormGroup;
  sub$ = new Subscription();
  loading = false;
  submitDisabled = true;
  /** Vista previa de modalidad según el reparto actual del formulario. */
  modalityPreview = SUBJECT_INSTRUCTION_LABEL[
    instructionTypeFromHours(0, 0)
  ];

  oldFormValue: SubjectVM = {
    departmentId: 0,
    name: '',
    status: true,
    id: 0,
    careerIds: [],
    code: '',
    credits: 0,
    hours: 0,
    theoreticalHours: 0,
    practicalHours: 0,
    semester: 0,
    typeCurriculum: 0,
    description: '',
  };

  status = [
    { name: 'Activo', value: true },
    { name: 'Inactivo', value: false, },
  ];

  departments: Array<DepartmentItemVM> = [];
  careers: Array<CareerVM> = [];

  constructor(
    private subjectsService: SubjectsService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: TeacherVM,
    private userStateService: UserStateService,
  ) { }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
    this.sub$.add(
      this.subjectsService.getLoading$().subscribe((loading) => {
        this.loading = loading;
      })
    );
    this.createForm();
    this.loadDepartmentsCareers();
    this.loadData();
  }

  loadData(): void {
    if (this.data?.id) {
      this.id = this.data?.id;
      this.sub$.add(
        this.subjectsService
          .find$({ id: this.id })
          .subscribe((entity) => {
            if (entity) {
              this.oldFormValue = this.formComparable(entity);
              this.form.patchValue(
                {
                  ...entity,
                },
                {
                  emitEvent: false,
                }
              );
              this.refreshModalityPreview();
              this.submitDisabled = true;
            }
          })
      );
    }
  }

  loadDepartmentsCareers(): void {
    this.sub$.add(
      this.subjectsService.getDepartaments$(
        this.userStateService.getSchoolId()
      ).subscribe((departments) => {
        this.departments = departments;
      })
    );

    this.sub$.add(
      this.subjectsService.getCareers$().subscribe((careers) => {
        this.careers = careers;
      }
      )
    );
  }

  clickClosed(): void {
    this.closed.emit();
  }

  private createForm(): void {
    this.form = this.formBuilder.group(
      {
        name: [null, [Validators.required]],
        credits: [null, [Validators.required, Validators.min(1)]],
        description: [null],
        hours: [null, [Validators.required, Validators.min(1)]],
        theoreticalHours: [0, [Validators.required, Validators.min(0)]],
        practicalHours: [0, [Validators.required, Validators.min(0)]],
        id: [0],
        code: [null, [Validators.required]],
        status: [true, [Validators.required]],
        semester: [null, [Validators.required, Validators.min(1)]],
        typeCurriculum: [2],
        departmentId: [null, [Validators.required]],
        careerIds: [[]],
      },
      { validators: [subjectHoursValidator()] },
    );

    // Al cambiar el total, si el reparto no cuadra se asume «solo teoría».
    this.sub$.add(
      this.form.get('hours')!.valueChanges.subscribe((hours) => {
        this.applyTheoryOnlyShortcut(Number(hours));
      })
    );

    this.sub$.add(
      this.form.valueChanges.subscribe(() => {
        this.refreshModalityPreview();
        this.submitDisabled =
          isEqual(this.oldFormValue, this.formComparable(this.form.getRawValue())) ||
          this.form.invalid;
      })
    );
  }

  /**
   * Si teoría+práctica no suman el nuevo total, reparte todo a teoría
   * (práctica = 0), atajo alineado con el default del backend.
   */
  private applyTheoryOnlyShortcut(hours: number): void {
    if (!Number.isInteger(hours) || hours < 1) {
      return;
    }
    const theory = Number(this.form.get('theoreticalHours')?.value ?? 0);
    const practice = Number(this.form.get('practicalHours')?.value ?? 0);
    if (theory + practice === hours) {
      return;
    }
    this.form.patchValue(
      { theoreticalHours: hours, practicalHours: 0 },
      { emitEvent: false },
    );
  }

  private refreshModalityPreview(): void {
    const theory = Number(this.form.get('theoreticalHours')?.value ?? 0);
    const practice = Number(this.form.get('practicalHours')?.value ?? 0);
    this.modalityPreview =
      SUBJECT_INSTRUCTION_LABEL[instructionTypeFromHours(theory, practice)];
  }

  /** Campos comparables del formulario (sin modality calculada por la API). */
  private formComparable(value: Partial<SubjectVM>): SubjectVM {
    return {
      departmentId: value.departmentId ?? 0,
      name: value.name ?? '',
      status: value.status ?? true,
      id: value.id ?? 0,
      careerIds: [...(value.careerIds ?? [])],
      code: value.code ?? '',
      credits: value.credits ?? 0,
      hours: value.hours ?? 0,
      theoreticalHours: value.theoreticalHours ?? 0,
      practicalHours: value.practicalHours ?? 0,
      semester: value.semester ?? 0,
      typeCurriculum: value.typeCurriculum ?? 0,
      description: value.description ?? '',
    };
  }

  clickSave(): void {
    if (this.id) {
      this.update();
    } else {
      this.create();
    }
  }

  private create(): void {
    if (!this.submitDisabled) {
      this.sub$.add(
        this.subjectsService
          .create({
            ...this.form.value,
          })
          .subscribe(
            () => {
              this.form.reset();
              this.clickClosed();
            }
          )
      );
    }
  }

  private update(): void {
    if (!this.submitDisabled) {
      this.sub$.add(
        this.subjectsService
          .update({
            ...this.form.value,
            id: this.id,
          })
          .subscribe(
            () => {
              this.form.reset();
              this.clickClosed();
            }
          )
      );
    }
  }

}
