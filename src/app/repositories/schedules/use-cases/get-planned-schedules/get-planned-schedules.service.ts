import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

import { ScheduleBaseQuery } from '../../model';
import { GetSchedulesService } from '../get-schedules';

@Injectable()
export class GetPlannedSchedulesService {

  constructor(
    private getSchedulesService: GetSchedulesService,
  ) { }

  exec(data: ScheduleBaseQuery): Observable<any> {
    return this.getSchedulesService.exec(data, false)
      .pipe(
        map(schedules => schedules.map((schedule) => ({
          ...schedule,
          code: schedule?.section?.subject?.code,
          name: schedule?.section?.subject?.name,
          semester:schedule?.section?.subject?.semester,
          sectionName: schedule?.section?.name,
          dayName: schedule.day?.abbreviation,
          classroomName: schedule.classroom?.name,
          start: schedule?.start,
          end: schedule?.end,
          documentTeacher: schedule?.section?.teacher?.idDocument,
          teacherName:
            schedule?.section?.teacher?.lastName ?
              (`${schedule?.section?.teacher?.lastName}, ${schedule?.section?.teacher?.firstName}`) :
              schedule?.section?.teacher?.firstName,
          scheduleId: schedule.id,
          capacity: schedule?.section?.capacity,
        })))
      );
  }
}
