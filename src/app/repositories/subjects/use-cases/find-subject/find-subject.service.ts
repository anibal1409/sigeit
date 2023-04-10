import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

import { Subject2SubjectItemVM } from '../../mappers';
import { SubjectItemVM } from '../../model';

@Injectable()
export class FindSubjectService {
  constructor(private http: HttpClient) {}

  exec(subjectId: number): Observable<SubjectItemVM> {
    return this.http.get(`http://localhost:3000/subjects/${subjectId}`).pipe(
      map(Subject2SubjectItemVM)
    );
  }
}
