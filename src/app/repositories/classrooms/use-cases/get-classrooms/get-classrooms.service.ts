import { Injectable } from '@angular/core';

import { ClassroomService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import {
  BaseQuery,
  UseCase,
} from '../../../../common';
import { Classroom2ClassroomItemVM } from '../../mappers';
import { ClassroomsMemoryService } from '../../memory';
import { ClassroomItemVM } from '../../model';

@Injectable()
export class GetClassroomsService
implements UseCase<Array<ClassroomItemVM> | null, BaseQuery> {

  constructor(
    private entityServices: ClassroomService,
    private memoryService: ClassroomsMemoryService,
  ) {}

  exec(data: BaseQuery = {}): Observable<Array<ClassroomItemVM>> {
    return this.entityServices.classroomControllerFindAll()
    .pipe(
      map((entities: any) => entities.map(Classroom2ClassroomItemVM)),
      tap((entity) => {
        this.memoryService.setDataSource(entity);
      })
    );
  }
}
