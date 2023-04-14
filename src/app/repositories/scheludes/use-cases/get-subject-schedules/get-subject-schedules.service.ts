import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import { Schedule2ScheduleItemVM } from '../../mappers';
import { ScheduleItemVM } from '../../model';

@Injectable()
export class GetSubjectSchedulesService {
  constructor(private http: HttpClient) {}

  exec(subjectId: number, periodId: number): Observable<Array<ScheduleItemVM>> {
    return this.http
      .get(
        `http://localhost:3000/schedules?periodId=${periodId}&_expand=section&_expand=day&_expand=classroom`
      )
      .pipe(
        map((schedules: any) => schedules.map(Schedule2ScheduleItemVM)),
        map((schedules) => {
          return schedules
            .filter(
              (schedule: ScheduleItemVM) =>
                schedule.section?.subjectId == subjectId
            )
            .sort((prev: ScheduleItemVM, next: ScheduleItemVM) => {
              if (prev.section?.name && next.section?.name) {
                if (prev.section?.name > next.section?.name) {
                  return 1;
                } else if (prev.section?.name < next.section?.name) {
                  return -1;
                } else {
                  if (prev.day?.name && next.day?.name) {
                    if (prev.day.id > next.day.id) {
                      return 1;
                    } else if (prev.day.id < next.day.id) {
                      return -1;
                    } else {
                      if (prev.start > next.start) {
                        return 1;
                      } else {
                        return -1;
                      }
                    }
                  }
                }
                return 0;
              }
              return;
            });
        })
      );
  }
}
