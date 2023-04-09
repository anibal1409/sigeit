import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

@Injectable()
export class RemoveScheduleService {

  constructor(
    private http: HttpClient
  ) { }

  exec(scheduleId: number): Observable<number> {
    return this.http.delete(`http://localhost:3000/schedules/${scheduleId}`)
    .pipe(
      map((data) => 1)
    );
  }
}
