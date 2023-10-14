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
  DepartmentItemVM,
  DepartmentVM,
} from '../../model';

@Injectable()
export class CreateDepartmentService
  implements UseCase<DepartmentItemVM | null, DepartmentVM>
{
  constructor(
    private departmentService: DepartmentService,
    private memoryService: DepartmentsMemoryService,
  ) { }

  exec(departmentSave: DepartmentVM): Observable<DepartmentItemVM | null> {
    return this.departmentService
      .departmentControllerCreate({
        abbreviation: departmentSave.abbreviation,
        name: departmentSave.name,
        status: !!departmentSave.status,
        logo: departmentSave.logo,
        description: departmentSave.description,
        school: {
          id: departmentSave.schoolId,
        }
      })
      .pipe(
        map(Department2DepartmentItemVM),
        tap((department) => {
          this.memoryService.create(department);
        })
      );
  }
}