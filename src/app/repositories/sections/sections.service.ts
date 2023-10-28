import { Injectable } from '@angular/core';

import {
  finalize,
  Observable,
} from 'rxjs';

import { ListComponentService } from '../../common/memory-repository';
import {
  DepartmentBaseQuery,
  DepartmentVM,
  GetDepartmentsService,
} from '../departments';
import {
  ActivePeriodService,
  PeriodVM,
  ToPlanPeriodService,
} from '../periods';
import {
  GetSubjectsService,
  SubjectBaseQuery,
  SubjectVM,
} from '../subjects';
import {
  GetTeachersService,
  TeacherBaseQuery,
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
  GetSectionsService,
  RemoveSectionService,
  UpdateSectionService,
} from './use-cases';

@Injectable()
export class SectionsService extends ListComponentService<SectionItemVM, SectionBaseQuery> {

  constructor(
    public getEntityService: GetSectionsService,
    public memoryEntityService: SectionMemoryService,
    public createEntityService: CreateSectionService,
    public deleteEntityService: RemoveSectionService,
    public findEntityService: FindSectionService,
    public updateEntityService: UpdateSectionService,
    private getDepartmentsService: GetDepartmentsService,
    private getTeachersService: GetTeachersService,
    private getSubjectsService: GetSubjectsService,
    private activePeriodService: ActivePeriodService,
    private toPlanPeriodService: ToPlanPeriodService,
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

  getDepartaments$(data: DepartmentBaseQuery): Observable<Array<DepartmentVM>> {
    return this.getDepartmentsService.exec(data, false);
  }

  getSubjects$(data: SubjectBaseQuery): Observable<Array<SubjectVM>> {
    return this.getSubjectsService.exec(data);
  }

  getTeachers$(data: TeacherBaseQuery): Observable<Array<TeacherItemVM>> {
    return this.getTeachersService.exec(data, false);
  }

  getActivePeriod$(): Observable<PeriodVM> {
    this.setLoading(true);
    return this.activePeriodService.exec()
    .pipe(
      finalize(() => this.setLoading(false))
    );
  }
  
  getToPlanPeriod$(): Observable<PeriodVM> {
    this.setLoading(true);
    return this.toPlanPeriodService.exec()
      .pipe(
        finalize(() => this.setLoading(false))
      );
  }


  getSections$(data: SectionBaseQuery): Observable<Array<SectionItemVM>> {
    return this.getEntityService.exec(data, false);
  }
}


