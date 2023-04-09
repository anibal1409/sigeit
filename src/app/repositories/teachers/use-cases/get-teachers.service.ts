import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

import { Teacher2TeacherItemVM } from '../mappers';
import { TeacherItemVM } from '../model';

@Injectable()
export class GetTeachersService {
  constructor(
    private httpClient: HttpClient,
  ) {}

  exec(): Observable<Array<TeacherItemVM>> {
    return this.httpClient.get('http://localhost:3000/teachers?_sort=last_name&_order=asc&_expand=department')
    .pipe(
      map((teachers: any) =>  teachers.map(Teacher2TeacherItemVM))
    );
  }
}
