import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

import { Subject2SubjectItemVM } from '../mappers';
import { SubjectItemVM } from '../model';

@Injectable()
export class GetSubjectsService {
  constructor(private http: HttpClient) {}

  exec(): Observable<Array<SubjectItemVM>> {
    return this.http.get('http://localhost:3000/subjects').pipe(
      map((data: any) => {
        return data?.map(Subject2SubjectItemVM);
      })
    );
  }
}
