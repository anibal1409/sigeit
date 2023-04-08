import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { DepartmentItemVM } from './model';
import { GetDepartmentsService } from './use-cases';

@Injectable()
export class DepartmentsService {

  constructor(
    private getDepartmentsService: GetDepartmentsService,
  ) {}

  getDepartments$(): Observable<Array<DepartmentItemVM>> {
    return this.getDepartmentsService.exec();
  }
}
