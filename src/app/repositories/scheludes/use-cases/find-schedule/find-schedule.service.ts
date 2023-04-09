import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

import { Schedule2ScheduleVM } from '../../mappers';
import { ScheduleVM } from '../../model';

@Injectable()
export class FindScheduleService {

  constructor(
    private http: HttpClient
  ) { }

  exec(scheduleId: number): Observable<ScheduleVM> {
    return this.http.get(`http://localhost:3000/schedules/${scheduleId}`)
    .pipe(
      map(Schedule2ScheduleVM)
    );
  }
}
