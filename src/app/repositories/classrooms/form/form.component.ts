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

import { DepartmentItemVM } from '../../departments';
import { ClassroomsService } from '../classrooms.service';
import {
  CLASSROOM_TYPES,
  ClassroomVM,
} from '../model';

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

  oldFormValue: ClassroomVM = {
    name: '',
    description: '',
    id: 0,
    status: true,
    departmentIds: [],
    type: 'CLASSROOM',
  };
  
  status = [
    { name: 'Activo', value: true },
    { name: 'Inactivo', value: false, },
  ];

  departments: Array<DepartmentItemVM> = [];
  classroomTypes = CLASSROOM_TYPES;

  constructor(
    private classroomsService: ClassroomsService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: ClassroomVM,
  ) { }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
    this.sub$.add(
      this.classroomsService.getLoading$().subscribe((loading) => {
        this.loading = loading;
      })
    );
    this.createForm();
    this.loadSchools();
    this.loadData();
  }

  loadData(): void {
    console.log(this.data);
    
    if (this.data?.id) {
      this.id = this.data?.id;
      this.sub$.add(
        this.classroomsService
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

  loadSchools(): void {
    this.sub$.add(
      this.classroomsService.getDepartments$().subscribe((departments) => {
        this.departments = departments;
      })
    );
  }

  clickClosed(): void {
    this.closed.emit();
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.maxLength(200)]],
      id: [0],
      status: [true, [Validators.required]],
      departmentIds:  [[],],
      type: ['CLASSROOM', [Validators.required]]
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
        this.classroomsService
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
        this.classroomsService
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
