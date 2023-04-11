import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

import { Schedule2ScheduleItemVM } from '../../mappers';
import {
  ScheduleItemVM,
  ScheduleVM,
} from '../../model';

@Injectable()
export class GetClassroomScheduleService {
  constructor(private http: HttpClient) {}

  exec(schedule: ScheduleVM): Observable<Array<ScheduleItemVM>> {
    return this.http
      .get(
        `http://localhost:3000/schedules?classroomId=${schedule.classroomId}&dayId=${schedule.dayId}&periodId=${schedule.periodId}&_expand=classroom&_expand=day&_expand=section`
      )
      .pipe(map((schedules: any) => schedules.map(Schedule2ScheduleItemVM)));
  }
}
