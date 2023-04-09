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
export class UpdateScheduleService {

  constructor(
    private http: HttpClient
  ) { }

  exec(schedule: ScheduleVM): Observable<ScheduleItemVM> {
    return this.http.put(`http://localhost:3000/schedules/${schedule.id}`, schedule)
    .pipe(
      map(Schedule2ScheduleItemVM)
    );
  }
}
