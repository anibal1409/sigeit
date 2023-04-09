import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

import { Period2PeriodItemVM } from '../mappers';
import { PeriodItemVM } from '../model';

@Injectable()
export class GetPeriodsService {
  constructor(private http: HttpClient) {}

  exec(): Observable<Array<PeriodItemVM>> {
    return this.http.get('http://localhost:3000/periods')
    .pipe(
      map((data: any) => {
        return data?.map(Period2PeriodItemVM);
      })
    );
  }
}
