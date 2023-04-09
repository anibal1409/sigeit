import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { DepartmentVM } from '../departments';
import { SubjectVM } from '../subjects';
import {
  SectionItemVM,
  SectionVM,
} from './model';
import {
  CreateSectionService,
  GetDepartamentsBySchoolService,
  GetSubjectsByDepartmentService,
  GetSubjectSectionsService,
} from './use-cases';

@Injectable()
export class SectionsService {

  constructor(
    private getDepartamentsService: GetDepartamentsBySchoolService,
    private getSubjectsService: GetSubjectsByDepartmentService,
    private getSubjectSectionsService: GetSubjectSectionsService,
    private createSectionService: CreateSectionService,
  ) {}

  getDepartaments$(idSchool: number): Observable<Array<DepartmentVM>> {
    return this.getDepartamentsService.exec(idSchool);
  }

  getSubjects$(departmentId: number, semester: number): Observable<Array<SubjectVM>> {
    return this.getSubjectsService.exec(departmentId, semester);
  }

  getSections$(subjectId: number, periodId: number): Observable<Array<SectionItemVM>> {
    return this.getSubjectSectionsService.exec(subjectId, periodId);
  }

  createSection$(section: SectionVM): Observable<SectionItemVM> {
    return this.createSectionService.exec(section);
  }

}
