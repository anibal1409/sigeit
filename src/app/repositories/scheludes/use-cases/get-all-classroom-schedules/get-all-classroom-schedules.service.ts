import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Schedule2ScheduleItemVM } from '../../mappers';
import { ScheduleVM, ScheduleItemVM } from '../../model';

@Injectable({
  providedIn: 'root',
})
export class GetAllClassroomSchedulesService {
  constructor(private http: HttpClient) {}

  exec(classroomId: number): Observable<Array<ScheduleItemVM>> {
    return this.http
      .get(
        `http://localhost:3000/schedules?classroomId=${classroomId}&_expand=day&_expand=section`
      )
      .pipe(map((schedules: any) => schedules.map(Schedule2ScheduleItemVM)));
  }
}
