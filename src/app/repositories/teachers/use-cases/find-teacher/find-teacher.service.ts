import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

import { Teacher2TeacherVM } from '../../mappers';
import { TeacherVM } from '../../model';

@Injectable()
export class FindTeacherService {

  constructor(
    private http: HttpClient
  ) { }

  exec(teacherId: number): Observable<TeacherVM> {
    return this.http.get(`http://localhost:3000/teachers/${teacherId}`)
    .pipe(
      map(Teacher2TeacherVM)
    );
  }
}
