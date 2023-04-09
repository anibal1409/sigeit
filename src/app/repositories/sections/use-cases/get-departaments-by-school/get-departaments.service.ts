import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

import {
  Department2DepartmentVM,
  DepartmentVM,
} from '../../../departments';

@Injectable()
export class GetDepartamentsBySchoolService {

  constructor(
    private http: HttpClient
  ) {}

  exec(shoolId: number): Observable<Array<DepartmentVM>> {
    const url = shoolId === -1 ? `http://localhost:3000/departments` : `http://localhost:3000/departments?shoolId=${shoolId}`;
    return this.http.get(url)
    .pipe(
      map((departments: any) => departments.map(Department2DepartmentVM)),
    );
  }
}
