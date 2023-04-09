import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import { Period2PeriodItemVM } from '../mappers';
import { PeriodItemVM } from '../model';

@Injectable()
export class GetPeriodsService {
  constructor(private http: HttpClient) {}

  exec(): Observable<Array<PeriodItemVM>> {
    return this.http.get('data/periods.json').pipe(
      map((data: any) => {
        return data?.map((period: any) => Period2PeriodItemVM(period));
      })
    );
  }
}
