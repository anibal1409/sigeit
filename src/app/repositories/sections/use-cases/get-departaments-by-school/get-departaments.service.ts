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

  exec(idSchool: number): Observable<Array<DepartmentVM>> {
    return this.http.get('data/departments.json')
    .pipe(
      map((departments: any) => departments.map(Department2DepartmentVM)),
      map(
        (departments) => {
          return departments.filter((department: DepartmentVM) => idSchool === -1 || department.id_school === idSchool);
        }
      )
    );
  }
}
