import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ListComponentService } from '../../common';
import { SchoolItemVM } from '../schools';
import { GetSchoolsService } from '../schools/use-cases/get-schools';
import { DepartmentsMemoryService } from './memory';
import {
  DepartmentBaseQuery,
  DepartmentItemVM,
} from './model';
import {
  CreateDepartmentService,
  DeleteDepartmentService,
  FindDepartmentService,
  GetDepartmentsService,
  UpdateDepartmentService,
} from './use-cases';

@Injectable()
export class DepartmentsService extends ListComponentService<DepartmentItemVM, DepartmentBaseQuery> {
  constructor(
    public getEntityService: GetDepartmentsService,
    public memoryEntityService: DepartmentsMemoryService,
    public createEntityService: CreateDepartmentService,
    public deleteEntityService: DeleteDepartmentService,
    public findEntityService: FindDepartmentService,
    public updateEntityService: UpdateDepartmentService,
    private getSchoolsService: GetSchoolsService,
  ) {
    super(
      getEntityService,
      memoryEntityService,
      deleteEntityService,
      createEntityService,
      updateEntityService,
      findEntityService,
    );
  }

  getSchools$(): Observable<Array<SchoolItemVM>> {
    return this.getSchoolsService.exec();
  }
}
