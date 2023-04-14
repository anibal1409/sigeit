import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  forkJoin,
  map,
  mergeMap,
  Observable,
  of,
} from 'rxjs';

import { Subject2SubjectItemVM } from '../../../subjects';
import { Schedule2ScheduleItemVM } from '../../mappers';
import { ScheduleItemVM } from '../../model';

@Injectable()
export class GetAllClassroomSchedulesService {
  constructor(private http: HttpClient) {}

  exec(classroomId: number, periodId: number): Observable<any> {
    return this.http
      .get(
        `http://localhost:3000/schedules?classroomId=${classroomId}&periodId=${periodId}&_expand=day&_expand=section`
      )
      .pipe(
        map((schedules: any) => schedules.map(Schedule2ScheduleItemVM)),
        mergeMap(
          (schudules) => {
            const scheduleObservables = schudules.map(
              (schedule: ScheduleItemVM) => {
                return this.http.get(`http://localhost:3000/subjects/${schedule.section?.subjectId}`)
                .pipe(
                  map((Subject2SubjectItemVM)),
                  map((subject) => {
                    if (schedule.section) {
                      schedule.section.subject = subject;
                    }
                    return schedule;
                  })
                );
              }
            );

            return schudules?.length ? forkJoin(scheduleObservables) as any : of([]);
          }
        ),
      );
  }
}
