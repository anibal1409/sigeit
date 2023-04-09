import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  forkJoin,
  map,
  Observable,
} from 'rxjs';

import {
  DepartmentItemVM,
  GetDepartmentsService,
} from '../../departments';
import { Teacher2TeacherItemVM } from '../mappers';
import { TeacherItemVM } from '../model';

@Injectable()
export class GetTeachersService {
  constructor(
    private httpClient: HttpClient,
    private getDepartmentsService: GetDepartmentsService
  ) {}

  exec(): Observable<Array<TeacherItemVM>> {
    return forkJoin({
      teachers: this.httpClient.get('http://localhost:3000/teachers?_sort=last_name&_order=asc'),
      departments: this.getDepartmentsService.exec(),
    }).pipe(
      map((data: { teachers: any; departments: Array<DepartmentItemVM> }) => {
        return data?.teachers.map((teacher: any) =>
          Teacher2TeacherItemVM(teacher, data.departments)
        );
      })
    );
  }
}
