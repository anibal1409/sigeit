import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DepartmentItemVM, GetDepartmentsService } from '../../departments';
import { TeacherItemVM } from '../model';
import { Observable, forkJoin, map } from 'rxjs';
import { Teacher2TeacherItemVM } from '../mappers';

@Injectable()
export class GetTeachersService {
  constructor(
    private httpClient: HttpClient,
    private getDepartmentsService: GetDepartmentsService
  ) {}

  exec(): Observable<Array<TeacherItemVM>> {
    return forkJoin({
      teachers: this.httpClient.get('data/teachers.json'),
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
