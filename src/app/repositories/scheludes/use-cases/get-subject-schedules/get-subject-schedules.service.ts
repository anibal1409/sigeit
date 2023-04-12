import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Schedule2ScheduleItemVM } from '../../mappers';
import { ScheduleItemVM } from '../../model';

@Injectable()
export class GetSubjectSchedulesService {
  constructor(private http: HttpClient) {}

  exec(subjectId: number): Observable<Array<ScheduleItemVM>> {
    return this.http
      .get(
        `http://localhost:3000/schedules?_expand=section&_expand=day&_expand=classroom`
      )
      .pipe(
        map((schedules: any) => schedules.map(Schedule2ScheduleItemVM)),
        map((scheules) => {
          return scheules.filter(
            (scheule: ScheduleItemVM) => scheule.section?.subjectId == subjectId
          );
        })
      );
  }
}
