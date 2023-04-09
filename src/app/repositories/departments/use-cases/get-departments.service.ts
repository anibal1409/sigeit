import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

import { Department2DepartmentItemVM } from '../mappers';
import { DepartmentItemVM } from '../model';

@Injectable()
export class GetDepartmentsService {
  constructor(
    private http: HttpClient,
  ) {}

  exec(): Observable<Array<DepartmentItemVM>> {
    return this.http.get('http://localhost:3000/departments?_expand=school')
    .pipe(
      map((departments: any) => departments.map(Department2DepartmentItemVM))
    );
  }
}
