import { Injectable } from '@angular/core';

import { ScheduleService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../../common/memory-repository';
import { Schedule2ScheduleItemVM } from '../../mappers';
import { ScheduleMemoryService } from '../../memory';
import {
  ScheduleItemVM,
  ScheduleVM,
} from '../../model';

@Injectable()
export class UpdateScheduleService
  implements UseCase<ScheduleItemVM, ScheduleVM>
{
  constructor(
    private entityServices: ScheduleService,
    private memoryService: ScheduleMemoryService,
  ) { }

  exec(entitySave: ScheduleVM): Observable<ScheduleItemVM> {
    return this.entityServices
      .scheduleControllerUpdate({
        status: !!entitySave.status,
        classroom: { id: entitySave.classroomId },
        day: { id: entitySave.dayId },
        period: { id: entitySave.periodId },
        end: entitySave.end,
        start: entitySave.start,
        section: { id: entitySave.sectionId },
      }, entitySave.id || 0)
      .pipe(
        map(Schedule2ScheduleItemVM),
        tap((entity) => {
          this.memoryService.update(entity);
        })
      );
  }
} 