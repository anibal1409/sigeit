import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ListComponentService } from '../../common/memory-repository';
import {
  DepartmentVM,
  GetDepartmentsService,
} from '../departments';
import {
  ActivePeriodService,
  PeriodVM,
} from '../periods';
import {
  GetSubjectsService,
  SubjectBaseQuery,
  SubjectVM,
} from '../subjects';
import {
  GetTeachersService,
  TeacherItemVM,
} from '../teachers';
import { SectionMemoryService } from './memory';
import {
  SectionBaseQuery,
  SectionItemVM,
} from './model';
import {
  CreateSectionService,
  FindSectionService,
  GetSetcionsService,
  RemoveSectionService,
  UpdateSectionService,
} from './use-cases';

@Injectable()
export class SectionsService extends ListComponentService<SectionItemVM, SectionBaseQuery> {

  constructor(
    public getEntityService: GetSetcionsService,
    public memoryEntityService: SectionMemoryService,
    public createEntityService: CreateSectionService,
    public deleteEntityService: RemoveSectionService,
    public findEntityService: FindSectionService,
    public updateEntityService: UpdateSectionService,
    private getDepartmentsService: GetDepartmentsService,
    private getTeachersService: GetTeachersService,
    private getSubjectsService: GetSubjectsService,
    private activePeriodService: ActivePeriodService,
  ) {
    super(
      getEntityService,
      memoryEntityService,
      deleteEntityService,
      createEntityService,
      updateEntityService,
      findEntityService,
    );
  }

  getDepartaments$(schoolId?: number): Observable<Array<DepartmentVM>> {
    return this.getDepartmentsService.exec({schoolId});
  }

  getSubjects$(data: SubjectBaseQuery): Observable<Array<SubjectVM>> {
    return this.getSubjectsService.exec(data);
  }

  getTeachers$(departmentId?: number): Observable<Array<TeacherItemVM>> {
    return this.getTeachersService.exec({departmentId});
  }

  getActivePeriod$(): Observable<PeriodVM> {
    return this.activePeriodService.exec();
  }

  getSections$(data: SectionBaseQuery): Observable<Array<SectionItemVM>> {
    return this.getEntityService.exec(data, false);
  }
}


