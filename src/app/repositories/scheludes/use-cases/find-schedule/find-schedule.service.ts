import { Injectable } from '@angular/core';

import { ScheduleService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import { UseCase } from '../../../../common';
import { Schedule2ScheduleVM } from '../../mappers';
import {
  ScheduleBaseQuery,
  ScheduleVM,
} from '../../model';

@Injectable()
export class FindScheduleService
  implements UseCase<ScheduleVM, ScheduleBaseQuery>
{
  constructor(private entityServices: ScheduleService) { }

  exec(data: ScheduleBaseQuery): Observable<ScheduleVM> {
    return this.entityServices
      .scheduleControllerFindOne(data?.id || 0)
      .pipe(map(Schedule2ScheduleVM));
  }
}
