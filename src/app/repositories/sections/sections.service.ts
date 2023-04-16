import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { DepartmentVM } from '../departments';
import { SubjectVM } from '../subjects';
import {
  GetTeachersService,
  TeacherItemVM,
} from '../teachers';
import {
  SectionItemVM,
  SectionVM,
} from './model';
import {
  CreateSectionService,
  FindSectionService,
  GetDepartamentsBySchoolService,
  GetSubjectsByDepartmentService,
  GetSubjectSectionsService,
  RemoveSectionService,
  UpdateSectionService,
} from './use-cases';

@Injectable()
export class SectionsService {

  constructor(
    private getDepartamentsService: GetDepartamentsBySchoolService,
    private getSubjectsService: GetSubjectsByDepartmentService,
    private getSubjectSectionsService: GetSubjectSectionsService,
    private createSectionService: CreateSectionService,
    private getTeachersService: GetTeachersService,
    private findSectionService: FindSectionService,
    private updateSectionService: UpdateSectionService,
    private removeSectionService: RemoveSectionService,
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

  getTeachers$(departmentId?: number): Observable<Array<TeacherItemVM>> {
    return this.getTeachersService.exec(departmentId);
  }

  findSection$(sectionId: number): Observable<SectionVM> {
    return this.findSectionService.exec(sectionId);
  }

  updateSection$(section: SectionVM): Observable<SectionItemVM> {
    return this.updateSectionService.exec(section);
  }

  removeSection$(sectionId: number): Observable<number> {
    return this.removeSectionService.exec(sectionId);
  }

}
