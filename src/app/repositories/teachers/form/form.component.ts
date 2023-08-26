import {
  Component,
  EventEmitter,
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

import {
  finalize,
  map,
  Observable,
  startWith,
  Subscription,
} from 'rxjs';

import { StateService } from '../../../common/state';
import { DepartmentVM } from '../../departments';
import { TeachersService } from '../teachers.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  @Input()
  teacherId!: number;

  @Output()
  closed = new EventEmitter();
  form!: FormGroup;
  sub$ = new Subscription();
  loading = false;
  filteredDepartments!: Observable<DepartmentVM[]>;
  departments: Array<DepartmentVM> = [];

  constructor(
    private teachersService: TeachersService,
    private stateService: StateService,
    private fb: FormBuilder,
  ) {}

  ngOnDestroy(): void {
    
  }
  ngOnInit(): void {
    this.createForm();
    this.loadDepartments();
  }

  private createForm(): void {
    this.form = this.fb.group({
      id: [null],
      departmentId: [null, [Validators.required]],
      id_document: [null, [Validators.required]],
      first_name: [null, [Validators.required]],
      last_name: [null, [Validators.required]],
      status: [true, [Validators.required]],
      email: ['', [Validators.email]],
    });
  }

  closeModal(value = false): void {
    if (!value) {
      this.closed.emit();
    } else {
      this.closed.emit();
    }
  }

  displayFn(item: DepartmentVM | any): string {
    return item?.name;
  }

  private loadDepartments(): void {
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.sub$.add(
      this.teachersService
        .getDepartaments$(1)
        .pipe(
          finalize(() => {
            this.loading = false;
            setTimeout(() => this.stateService.setLoading(this.loading), 500);
          })
        )
        .subscribe((departaments) => {
          this.departments = departaments;
          this.form.patchValue({
            departmentId: departaments[0],
          });
          if (departaments) {
            this.filteredDepartments = this.form.controls[
              'departmentId'
            ].valueChanges.pipe(
              startWith<string | DepartmentVM>(''),
              map((value: any) => {
                if (value !== null) {
                  if (value.id) {
                    return '';
                  } else {
                    return typeof value === 'string' ? value : value.name;
                  }
                }
                return '';
              }),
              map((name: any) => {
                return name
                  ? this._departmentFilter(name)
                  : this.departments.slice();
              })
            );
          }
        })
    );
  }

  private _departmentFilter(name: string): DepartmentVM[] {
    const filterValue = name.toLowerCase();
    return this.departments.filter(
      (option) => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  save(): void {
    if (this.form.valid) {
      const data = this.form.value;
      data.departmentId = data?.departmentId?.id || data?.departmentId;
      const obs = this.teacherId ?  this.teachersService.updateSection$(data) : this.teachersService.createSection$(data);
      obs.subscribe(
        () => {
          this.closeModal();
        }
      );
    }
  }

}
