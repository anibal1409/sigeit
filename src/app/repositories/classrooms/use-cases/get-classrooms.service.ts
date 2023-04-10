import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

import { Classroom2ClassroomItemVM } from '../mappers';
import { ClassroomItemVM } from '../model';

@Injectable()
export class GetClassroomsService {
  constructor(
    private httpClient: HttpClient
  ) { }

  exec(departmentId?: number): Observable<Array<ClassroomItemVM>> {
    return this.httpClient.get('http://localhost:3000/classrooms?_expand=department&_sort=name&_order=asc' + (!!departmentId ? `&departmentId=${departmentId}` : ''))
      .pipe(
        map((classrooms: any) => classrooms.map(Classroom2ClassroomItemVM)
        ));
  }
}
