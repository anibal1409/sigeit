import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ListComponentService } from '../../common';
import {
  DepartmentItemVM,
  GetDepartmentsService,
} from '../departments';
import { CareerMemoryService } from './memory';
import {
  CareerBaseQuery,
  CareerItemVM,
} from './model';
import {
  CreateCareerService,
  DeleteCareerService,
  FindCareerService,
  GetCareersService,
  UpdateCareerService,
} from './use-cases';

@Injectable()
export class CareersService extends ListComponentService<CareerItemVM, CareerBaseQuery> {
  constructor(
    public getEntityService: GetCareersService,
    public memoryEntityService: CareerMemoryService,
    public createEntityService: CreateCareerService,
    public deleteEntityService: DeleteCareerService,
    public findEntityService: FindCareerService,
    public updateEntityService: UpdateCareerService,
    private getDepartmentsService: GetDepartmentsService,
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

  getDepartments$(): Observable<Array<DepartmentItemVM>> {
    return this.getDepartmentsService.exec();
  }
}
