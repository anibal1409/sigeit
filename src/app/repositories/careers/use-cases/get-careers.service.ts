import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DepartmentItemVM, GetDepartmentsService } from '../../departments';
import { CareerItemVM } from '../model';
import { Observable, forkJoin, map } from 'rxjs';
import { Career2CareerItemVM } from '../mappers';

@Injectable()
export class GetCareersService {
  constructor(
    private httpClient: HttpClient,
    private getDepartmentsService: GetDepartmentsService
  ) {}

  exec(): Observable<Array<CareerItemVM>> {
    return forkJoin({
      careers: this.httpClient.get('data/careers.json'),
      departments: this.getDepartmentsService.exec(),
    }).pipe(
      map((data: { careers: any; departments: Array<DepartmentItemVM> }) => {
        return data?.careers.map((career: any) =>
          Career2CareerItemVM(career, data.departments)
        );
      })
    );
  }
}
