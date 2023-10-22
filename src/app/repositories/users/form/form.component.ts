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

import { CareerItemVM } from '../../careers';
import { DepartmentItemVM } from '../../departments';
import { SchoolItemVM } from '../../schools';
import {
  USER_ROLES,
  UserRole,
  UserVM,
} from '../model';
import { UsersService } from '../users.service';

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

  oldFormValue: UserVM = {
    departmentId: 0,
    email: '',
    idDocument: '',
    name: '',
    status: true,
    id: 0,
    role: null as any,
    schoolId: 0,
  };

  status = [
    { name: 'Activo', value: true },
    { name: 'Inactivo', value: false, },
  ];

  departments: Array<DepartmentItemVM> = [];
  schools: Array<SchoolItemVM> = [];
  careers: Array<CareerItemVM> = [];
  roles = USER_ROLES;
  showSelects = false;
  showSchools = false;
  role!: UserRole;
  UserRole = UserRole;

  constructor(
    private usersService: UsersService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: UserVM,
  ) { }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
    this.sub$.add(
      this.usersService.getLoading$().subscribe((loading) => {
        this.loading = loading;
      })
    );
    this.createForm();
    this.loadDepartmentsSchools();
    this.loadData();
  }

  loadData(): void {
    if (this.data?.id) {
      this.id = this.data?.id;
      this.sub$.add(
        this.usersService
          .find$({ id: this.id })
          .subscribe((entity) => {
            if (entity) {
              this.changeRole(entity.role);
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

  loadDepartmentsSchools(): void {
    this.sub$.add(
      this.usersService.getDepartaments$().subscribe((departments) => {
        this.departments = departments;
      })
    );
    this.sub$.add(
      this.usersService.getSchools$().subscribe((schools) => {
        this.schools = schools;
      })
    );
    this.sub$.add(
      this.usersService.getCareers$().subscribe((careers) => {
        this.careers = careers;
      })
    );
  }

  clickClosed(): void {
    this.closed.emit();
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      idDocument: [null, [Validators.required]],
      name: [null, [Validators.required]],
      id: [0],
      status: [true, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      role: [null, [Validators.required]],
      departmentId: [null],
      schoolId: [null],
      careerId: [null],
    });

    this.sub$.add(
      this.form.valueChanges.subscribe(() => {
        this.submitDisabled =
          isEqual(this.oldFormValue, this.form.getRawValue()) ||
          this.form.invalid;
      })
    );

    this.sub$.add(
      this.form.get('role')?.valueChanges.subscribe((role) => {
        this.changeRole(role);
      }
      )
    );
  }

  private changeRole(role: UserRole): void {
    this.role = role;
    const {departmentId, schoolId, careerId} = this.form.controls;
    departmentId.clearValidators();
    departmentId.reset(null, {emitEvent: false});
    schoolId.clearValidators();
    schoolId.reset(null, {emitEvent: false});
    careerId.clearValidators();
    careerId.reset(null, {emitEvent: false});
    this.showSelects = role !== UserRole.Administrator;
    switch (role) {
      case UserRole.Director:
        schoolId.setValidators([Validators.required]);
        break;
      case UserRole.HeadDepartment:
      case UserRole.Planner:
      case UserRole.Teacher:
        departmentId.setValidators([Validators.required]);
        break;
      case UserRole.Student:
        careerId.setValidators([Validators.required]);
        break;      
    }
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
        this.usersService
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
        this.usersService
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
