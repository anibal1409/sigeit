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

  exec(data: DepartmentBaseQuery = {}, memory = true): Observable<Array<DepartmentItemVM>> {
    return this.departmentService.departmentControllerFindAll(
      data?.schoolId,
      data?.status,
    )
    .pipe(
      map((departments: any) => departments.map(Department2DepartmentItemVM)),
      tap((department) => {
        if(memory) {
          this.memoryService.setDataSource(department);
        }
      })
    );
  }
}
