import { Injectable } from '@angular/core';

import moment from 'moment';
import {
  map,
  Observable,
} from 'rxjs';

import {
  ScheduleItemVM,
  ScheduleVM,
} from '../../model';
import { GetSchedulesService } from '../get-schedules';

@Injectable()
export class ValidateTeacherSchedulesService {

  constructor(
    private getSchedulesService: GetSchedulesService,
  ) { }


  exec(scheduleVm: ScheduleVM, teacherId: number, periodId: number): Observable<Array<ScheduleItemVM>> {
    return this.getSchedulesService.exec({
      teacherId,
      periodId,
      dayId: scheduleVm.dayId,
    }, false)
      .pipe(
        map((schedules) => {
          const collapsedSchedules = schedules.filter((schedule) => {
            const start1 = moment(scheduleVm.start, 'HH:mm');
            const end1 = moment(scheduleVm.end, 'HH:mm');
            const start2 = moment(schedule.start, 'HH:mm');
            const end2 = moment(schedule.end, 'HH:mm');
            return start1.isSameOrBefore(end2) && end1.isSameOrAfter(start2);
          });
  
          return collapsedSchedules;
        })
      );
  }
}
