import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  forkJoin,
  map,
  Observable,
} from 'rxjs';

import {
  GetSchoolsService,
  SchoolItemVM,
} from '../../../schools';
import { Department2DepartmentItemVM } from '../../mappers';
import { DepartmentItemVM } from '../../model';

@Injectable()
export class GetDepartmentsService {

  constructor(
    private http: HttpClient,
    private getSchoolsService: GetSchoolsService,
  ) {}

  exec(): Observable<Array<DepartmentItemVM>> {
    return forkJoin({
      departments: this.http.get('data/departments.json'),
      schools: this.getSchoolsService.exec(),
    })
    .pipe(
      map((data: {departments: any, schools: Array<SchoolItemVM>}) => {
        return data?.departments.map((department: any) => Department2DepartmentItemVM(department, data.schools));
      }),
    );
  }
}
