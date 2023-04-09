import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

import { Schedule2ScheduleItemVM } from '../../mappers';
import { ScheduleItemVM } from '../../model';

@Injectable()
export class GetSectionsSchedulesService {

  constructor(
    private http: HttpClient
  ) { }

  exec(sectionId: number): Observable<Array<ScheduleItemVM>> {
    return this.http.get(`http://localhost:3000/schedules?sectionId=${sectionId}&_expand=classroom&_expand=day`)
      .pipe(
        map((sections: any) => sections.map(Schedule2ScheduleItemVM)),
      );
  }
}
