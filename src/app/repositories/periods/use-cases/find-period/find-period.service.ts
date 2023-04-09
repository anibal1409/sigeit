import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

import { Period2PeriodVM } from '../../mappers';
import { PeriodVM } from '../../model';

@Injectable()
export class FindPeriodService {

  constructor(
    private http: HttpClient
  ) { }

  exec(periodId: number): Observable<PeriodVM> {
    return this.http.get(`http://localhost:3000/periods/${periodId}`)
    .pipe(
      map(Period2PeriodVM)
    );
  }
}
