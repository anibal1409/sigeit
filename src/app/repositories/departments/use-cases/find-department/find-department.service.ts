import { Injectable } from '@angular/core';

import { DepartmentService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import { UseCase } from '../../../../common';
import { Department2DepartmentVM } from '../../mappers';
import {
  DepartmentBaseQuery,
  DepartmentVM,
} from '../../model';

@Injectable()
export class FindDepartmentService
  implements UseCase<DepartmentVM | null, DepartmentBaseQuery>
{
  constructor(private departmentService: DepartmentService) { }

  exec(data: DepartmentBaseQuery): Observable<DepartmentVM | null> {
    return this.departmentService
      .departmentControllerFindOne(data?.id || 0)
      .pipe(map(Department2DepartmentVM));
  }
}
