import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ListComponentService } from '../../common';
import {
  DepartmentItemVM,
  GetDepartmentsService,
} from '../departments';
import { ClassroomsMemoryService } from './memory';
import {
  ClassroomBaseQuery,
  ClassroomVM,
} from './model';
import {
  CreateClassroomService,
  DeleteClassroomService,
  FindClassroomService,
  GetClassroomsService,
  UpdateClassroomService,
} from './use-cases';

@Injectable()
export class ClassroomsService extends ListComponentService<ClassroomVM, ClassroomBaseQuery> {
  constructor(
    public getEntityService: GetClassroomsService,
    public memoryEntityService: ClassroomsMemoryService,
    public createEntityService: CreateClassroomService,
    public deleteEntityService: DeleteClassroomService,
    public findEntityService: FindClassroomService,
    public updateEntityService: UpdateClassroomService,
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
