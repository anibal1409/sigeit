import { Injectable } from '@angular/core';

import { ScheduleService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { Schedule2ScheduleItemVM } from '../../';
import { UseCase } from '../../../../common/memory-repository';
import { ScheduleMemoryService } from '../../memory';
import {
  ScheduleBaseQuery,
  ScheduleItemVM,
} from '../../model';

@Injectable()
export class GetSchedulesService
implements UseCase<Array<ScheduleItemVM> | null, ScheduleBaseQuery> {

  constructor(
    private entityServices: ScheduleService,
    private memoryService: ScheduleMemoryService,
  ) {}

  exec(data: ScheduleBaseQuery): Observable<Array<ScheduleItemVM>> {
    return this.entityServices.scheduleControllerFindAll(
      data?.periodId || 0,
      data?.sectionId,
      data?.subjectId,
      data?.periodId,
      data?.teacherId,
      data?.semester,
      data?.dayId,
      data?.classroomId,
    )
    .pipe(
      map((entities: any) => entities.map(Schedule2ScheduleItemVM)),
      tap((entity) => {
        this.memoryService.setDataSource(entity);
      })
    );
  }
}
