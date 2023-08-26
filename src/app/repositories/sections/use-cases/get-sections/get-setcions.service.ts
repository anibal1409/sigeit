import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

import {
  Section2SectionItemVM,
  SectionItemVM,
} from '../../';

@Injectable()
export class GetSetcionsService {

  constructor(
    private http: HttpClient
  ) { }

  exec(periodId: number): Observable<Array<SectionItemVM>> {
    return this.http.get(`http://localhost:3000/sections?periodId=${periodId}&_expand=teacher&_expand=subject`)
      .pipe(
        map((sections: any) => sections.map(Section2SectionItemVM)),
      );
  }
}
