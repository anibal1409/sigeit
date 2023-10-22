import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {
  BaseQuery,
  ListComponentService,
} from '../../common/memory-repository';
import { CareerItemVM } from '../careers';
import { GetCareersService } from '../careers/use-cases';
import {
  DepartmentVM,
  GetDepartmentsService,
} from '../departments';
import {
  GetSchoolsService,
  SchoolItemVM,
} from '../schools';
import { UserMemoryService } from './memory';
import { UserItemVM } from './model';
import {
  CreateUserService,
  DeleteUserService,
  FindUserService,
  UpdateUserService,
} from './use-cases';
import { GetUsersService } from './use-cases/get-users/get-users.service';

@Injectable()
export class UsersService extends ListComponentService<UserItemVM, BaseQuery> {
  constructor(
    public getEntityService: GetUsersService,
    public memoryEntityService: UserMemoryService,
    public createEntityService: CreateUserService,
    public deleteEntityService: DeleteUserService,
    public findEntityService: FindUserService,
    public updateEntityService: UpdateUserService,
    private getDepartmentsService: GetDepartmentsService,
    private getSchoolsService: GetSchoolsService,
    private getCareersService: GetCareersService,
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
  
  getDepartaments$(schoolId?: number): Observable<Array<DepartmentVM>> {
    return this.getDepartmentsService.exec({schoolId}, false);
  }

  getSchools$(): Observable<Array<SchoolItemVM>> {
    return this.getSchoolsService.exec();
  }

  getCareers$(): Observable<Array<CareerItemVM>> {
    return this.getCareersService.exec();
  }
}
