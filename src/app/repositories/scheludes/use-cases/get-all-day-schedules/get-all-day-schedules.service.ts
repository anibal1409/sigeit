import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Schedule2ScheduleItemVM } from '../../mappers';
import { ScheduleItemVM } from '../../model';

@Injectable({
  providedIn: 'root',
})
export class GetAllDaySchedulesService {
  constructor(private http: HttpClient) {}

  exec(dayId: number): Observable<Array<ScheduleItemVM>> {
    return this.http
      .get(
        `http://localhost:3000/schedules?dayId=${dayId}&_expand=classroom&_expand=section`
      )
      .pipe(map((schedules: any) => schedules.map(Schedule2ScheduleItemVM)));
  }
}
