import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import { Schelude2ScheludeItemVM } from '../mappers';
import { ScheludeItemVM } from '../model';

@Injectable()
export class GetScheludesService {
  constructor(private http: HttpClient) {}

  exec(): Observable<Array<ScheludeItemVM>> {
    return this.http.get('data/scheludes.json').pipe(
      map((data: any) => {
        return data?.map((schelude: any) => Schelude2ScheludeItemVM(schelude));
      })
    );
  }
}
