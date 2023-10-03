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
import { SubjectVM } from '../model';
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

  oldFormValue: SubjectVM = {
    departmentId: 0,
    name: '',
    status: true,
    id: 0,
    careerIds: [],
    code: '',
    credits: 0,
    hours: 0,
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
              this.oldFormValue = entity;
              this.form.patchValue(
                {
                  ...entity,
                },
                {
                  emitEvent: false,
                }
              );
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
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      credits: [null, [Validators.min(1)]],
      description: [null, [Validators.maxLength(200)]],
      hours: [null, [Validators.min(1)]],
      id: [0],
      code: [null, [Validators.required]],
      status: [true, [Validators.required]],
      semester: [null, [Validators.required, Validators.min(1)]],
      typeCurriculum: [2],
      departmentId: [null, [Validators.required]],
      careerIds: [[]],
    });

    this.sub$.add(
      this.form.valueChanges.subscribe(() => {
        this.submitDisabled =
          isEqual(this.oldFormValue, this.form.getRawValue()) ||
          this.form.invalid;
      })
    );
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

