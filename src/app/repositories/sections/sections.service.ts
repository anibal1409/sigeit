import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { DepartmentVM } from '../departments';
import { SubjectVM } from '../subjects';
import {
  GetDepartamentsService,
  GetSubjectsService,
} from './use-cases';

@Injectable()
export class SectionsService {

  constructor(
    private getDepartamentsService: GetDepartamentsService,
    private getSubjectsService: GetSubjectsService,
  ) {}

  getDepartaments$(idSchool: number): Observable<Array<DepartmentVM>> {
    return this.getDepartamentsService.exec(idSchool);
  }

  getSubjects$(departmentId: number, semester: number): Observable<Array<SubjectVM>> {
    return this.getSubjectsService.exec(departmentId, semester);
  }

}
