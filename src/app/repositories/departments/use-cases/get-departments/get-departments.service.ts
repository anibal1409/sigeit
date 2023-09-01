import { Injectable } from '@angular/core';

import { DepartmentService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../../common';
import { Department2DepartmentItemVM } from '../../mappers';
import { DepartmentsMemoryService } from '../../memory';
import {
  DepartmentBaseQuery,
  DepartmentItemVM,
} from '../../model';

@Injectable()
export class GetDepartmentsService
implements UseCase<Array<DepartmentItemVM> | null, DepartmentBaseQuery> {

  constructor(
    private departmentService: DepartmentService,
    private memoryService: DepartmentsMemoryService,
  ) {}

  exec(data: DepartmentBaseQuery = {}): Observable<Array<DepartmentItemVM>> {
    return this.departmentService.departmentControllerFindAll(
      data?.schoolId,
    )
    .pipe(
      map((departments: any) => departments.map(Department2DepartmentItemVM)),
      tap((department) => {
        this.memoryService.setDataSource(department);
      })
    );
  }
}
