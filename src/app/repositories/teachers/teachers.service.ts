import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ListComponentService } from '../../common/memory-repository';
import {
  DepartmentVM,
  GetDepartmentsService,
} from '../departments';
import { TeacherMemoryService } from './memory';
import {
  TeacherBaseQuery,
  TeacherItemVM,
} from './model';
import {
  CreateTeacherService,
  DeleteTeacherService,
  FindTeacherService,
  GetTeachersService,
  UpdateTeacherService,
} from './use-cases';

@Injectable()
export class TeachersService extends ListComponentService<TeacherItemVM, TeacherBaseQuery> {
  constructor(
    public getEntityService: GetTeachersService,
    public memoryEntityService: TeacherMemoryService,
    public createEntityService: CreateTeacherService,
    public deleteEntityService: DeleteTeacherService,
    public findEntityService: FindTeacherService,
    public updateEntityService: UpdateTeacherService,
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
  
  getDepartaments$(schoolId?: number): Observable<Array<DepartmentVM>> {
    return this.getDepartmentsService.exec({schoolId});
  }
}
