import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DepartmentItemVM, GetDepartmentsService } from '../../departments';
import { ClassroomItemVM } from '../model';
import { Observable, forkJoin, map } from 'rxjs';
import { Classroom2ClassroomItemVM } from '../mappers';

@Injectable()
export class GetClassroomsService {
  constructor(
    private httpClient: HttpClient,
    private getDepartmentsService: GetDepartmentsService
  ) {}

  exec(): Observable<Array<ClassroomItemVM>> {
    return forkJoin({
      classrooms: this.httpClient.get('data/classrooms.json'),
      departments: this.getDepartmentsService.exec(),
    }).pipe(
      map((data: { classrooms: any; departments: Array<DepartmentItemVM> }) => {
        return data?.classrooms.map((classroom: any) => {
          const log = Classroom2ClassroomItemVM(classroom, data.departments);
          return log;
        });
      })
    );
  }
}
