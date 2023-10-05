import { Injectable } from '@angular/core';

import { ClassroomService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import { UseCase } from '../../../../common/memory-repository';
import { Classroom2ClassroomVM } from '../../mappers';
import {
  ClassroomBaseQuery,
  ClassroomItemVM,
} from '../../model';

@Injectable()
export class FindClassroomService
  implements UseCase<ClassroomItemVM | null, ClassroomBaseQuery>
{
  constructor(private entityServices: ClassroomService) { }

  exec(data: ClassroomBaseQuery): Observable<ClassroomItemVM | null> {
    return this.entityServices
      .classroomControllerFindOne(data?.id || 0)
      .pipe(map(Classroom2ClassroomVM));
  }
}