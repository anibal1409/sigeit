import { Injectable } from '@angular/core';

import { ClassroomService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import {
  BaseQuery,
  UseCase,
} from '../../../../common/memory-repository';
import { Classroom2ClassroomVM } from '../../mappers';
import { ClassroomItemVM } from '../../model';

@Injectable()
export class FindClassroomService
  implements UseCase<ClassroomItemVM | null, BaseQuery>
{
  constructor(private entityServices: ClassroomService) { }

  exec(data: BaseQuery): Observable<ClassroomItemVM | null> {
    return this.entityServices
      .classroomControllerFindOne(data?.id || 0)
      .pipe(map(Classroom2ClassroomVM));
  }
}