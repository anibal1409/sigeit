import { Injectable } from '@angular/core';

import { ScheduleService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import { UseCase } from '../../../common/memory-repository';
import { Schedule2ScheduleItemVM } from '../../../repositories/schedules';
import {
  ScheduleBaseQuery,
  ScheduleItemVM,
} from '../../../repositories/schedules/model';

@Injectable()
export class GetSchedulesService
implements UseCase<Array<ScheduleItemVM>, ScheduleBaseQuery> {

    constructor(
      private entityServices: ScheduleService,
    ) {}
  
    exec(data: ScheduleBaseQuery = {}, memory = true): Observable<Array<ScheduleItemVM>> {
      return this.entityServices.scheduleControllerFindAllStudents(
        data?.periodId || 0,
        data?.sectionId,
        data?.subjectId,
        data?.periodId,
        data?.teacherId,
        data?.semester,
        data?.dayId,
        data?.classroomId,
        data?.departmentId,
        data?.status,
      )
      .pipe(
        map((entities: any) => entities.map(Schedule2ScheduleItemVM)),
      );
    }
  }
