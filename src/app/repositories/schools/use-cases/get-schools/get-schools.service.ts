import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

import { School2SchoolItemVM } from '../../mappers';
import { SchoolItemVM } from '../../model';

@Injectable()
export class GetSchoolsService {

  constructor(
    private http: HttpClient
  ) {}

  exec(): Observable<Array<SchoolItemVM>> {
    return this.http.get('http://localhost:3000/schools')
    .pipe(
      map((schools: any) => schools.map(School2SchoolItemVM)),
    );
  }
}
