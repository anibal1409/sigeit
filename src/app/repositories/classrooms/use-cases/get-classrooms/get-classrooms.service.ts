import { Injectable } from '@angular/core';

import { ClassroomService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../../common';
import { Classroom2ClassroomItemVM } from '../../mappers';
import { ClassroomsMemoryService } from '../../memory';
import {
  ClassroomBaseQuery,
  ClassroomItemVM,
} from '../../model';

@Injectable()
export class GetClassroomsService
implements UseCase<Array<ClassroomItemVM> | null, ClassroomBaseQuery> {

  constructor(
    private entityServices: ClassroomService,
    private memoryService: ClassroomsMemoryService,
  ) {}

  exec(data: ClassroomBaseQuery = {}, memory = true): Observable<Array<ClassroomItemVM>> {
    return this.entityServices.classroomControllerFindAll(
      data?.id,
      data?.departmentId,
      data?.status,
    )
    .pipe(
      map((entities: any) => entities.map(Classroom2ClassroomItemVM)),
      tap((entity) => {
        if (memory) {
          this.memoryService.setDataSource(entity);
        }
      })
    );
  }
}
