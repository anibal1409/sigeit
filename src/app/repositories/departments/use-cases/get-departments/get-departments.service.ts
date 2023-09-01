import { Injectable } from '@angular/core';

import { DepartmentService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import {
  BaseQuery,
  UseCase,
} from '../../../../common';
import { Department2DepartmentItemVM } from '../../mappers';
import { DepartmentsMemoryService } from '../../memory';
import { DepartmentItemVM } from '../../model';

@Injectable()
export class GetDepartmentsService
implements UseCase<Array<DepartmentItemVM> | null, BaseQuery> {

  constructor(
    private departmentService: DepartmentService,
    private memoryService: DepartmentsMemoryService,
  ) {}

  exec(data: BaseQuery = {}): Observable<Array<DepartmentItemVM>> {
    return this.departmentService.departmentControllerFindAll()
    .pipe(
      map((departments: any) => departments.map(Department2DepartmentItemVM)),
      tap((department) => {
        this.memoryService.setDataSource(department);
      })
    );
  }
}
