import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

import { Teacher2TeacherItemVM } from '../../mappers';
import {
  TeacherItemVM,
  TeacherVM,
} from '../../model';

@Injectable()
export class UpdateTeacherService {

  constructor(
    private http: HttpClient
  ) { }

  exec(teacher: TeacherVM): Observable<TeacherItemVM> {
    return this.http.put(`http://localhost:3000/teachers/${teacher.id}`, teacher)
    .pipe(
      map(Teacher2TeacherItemVM)
    );
  }
}
