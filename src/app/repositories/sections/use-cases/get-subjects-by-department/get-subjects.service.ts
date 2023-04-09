import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

import {
  Subject2SubjectVM,
  SubjectVM,
} from '../../../subjects';

@Injectable()
export class GetSubjectsByDepartmentService {

  constructor(
    private http: HttpClient
  ) { }

  exec(departmentId: number, semester: number): Observable<Array<SubjectVM>> {
    return this.http.get('data/subjects.json')
      .pipe(
        map((subjects: any) => subjects.map(Subject2SubjectVM)),
        map(
          (subjects) => {
            return subjects.filter((subject: SubjectVM) => subject.department_id === departmentId && (subject.semester === semester || semester === -1));
          }
        )
      );
  }
}
