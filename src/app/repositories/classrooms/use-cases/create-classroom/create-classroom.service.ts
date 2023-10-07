import { Injectable } from '@angular/core';

import { ClassroomService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../../common/memory-repository';
import { Classroom2ClassroomItemVM } from '../../mappers';
import { ClassroomsMemoryService } from '../../memory';
import {
  ClassroomItemVM,
  ClassroomVM,
} from '../../model';

@Injectable()
export class CreateClassroomService
  implements UseCase<ClassroomItemVM | null, ClassroomVM>
{
  constructor(
    private entityServices: ClassroomService,
    private memoryService: ClassroomsMemoryService,
  ) { }

  exec(entitySave: ClassroomVM): Observable<ClassroomItemVM | null> {
    return this.entityServices
      .classroomControllerCreate({
        name: entitySave.name.toUpperCase(),
        status: !!entitySave.status,
        type: entitySave.type,
        description: entitySave.description,
        departments: entitySave?.departmentIds?.map((id) => ({ id })),
      })
      .pipe(
        map(Classroom2ClassroomItemVM),
        tap((entity) => {
          this.memoryService.create(entity);
        })
      );
  }
}
