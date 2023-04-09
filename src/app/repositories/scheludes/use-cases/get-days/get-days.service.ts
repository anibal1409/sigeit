import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

import { Day2DayVM } from '../../mappers';
import { DayVM } from '../../model';

@Injectable()
export class GetDaysService {

  constructor(
    private http: HttpClient
  ) { }

  exec(): Observable<Array<DayVM>> {
    return this.http.get(`http://localhost:3000/days`)
      .pipe(
        map((days: any) => days.map(Day2DayVM)),
      );
  }
}
