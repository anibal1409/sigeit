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
  ScheduleBaseQuery,
  ScheduleItemVM,
} from '../../model';

@Injectable()
export class GetSchedulesService
implements UseCase<Array<ScheduleItemVM>, ScheduleBaseQuery> {

    constructor(
      private entityServices: ScheduleService,
      private memoryService: ScheduleMemoryService,
    ) {}
  
    exec(data: ScheduleBaseQuery = {}, memory = true): Observable<Array<ScheduleItemVM>> {
      return this.entityServices.scheduleControllerFindAll(
        data?.periodId || 0,
        data?.sectionId,
        data?.subjectId,
        data?.periodId,
        data?.teacherId,
        data?.semester,
        data?.dayId,
        data?.classroomId,
        data?.departmentId,
      )
      .pipe(
        map((entities: any) => entities.map(Schedule2ScheduleItemVM)),
        tap((entity) => {
          if (memory) {
            this.memoryService.setDataSource(entity);
          }
        })
      );
    }
  }
