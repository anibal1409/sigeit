import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ListComponentService } from '../../common/memory-repository';
import { CareerItemVM } from '../careers';
import { GetCareersService } from '../careers/use-cases';
import { DepartmentItemVM } from '../departments';
import { GetDepartmentsService } from '../departments/use-cases';
import { SubjectMemoryService } from './memory';
import {
  SubjectBaseQuery,
  SubjectItemVM,
} from './model';
import {
  CreateSubjectService,
  DeleteSubjectService,
  FindSubjectService,
  GetSubjectsService,
  UpdateSubjectService,
} from './use-cases';

@Injectable()
export class SubjectsService extends ListComponentService<SubjectItemVM, SubjectBaseQuery> {
  constructor(
    public getEntityService: GetSubjectsService,
    public memoryEntityService: SubjectMemoryService,
    public createEntityService: CreateSubjectService,
    public deleteEntityService: DeleteSubjectService,
    public findEntityService: FindSubjectService,
    public updateEntityService: UpdateSubjectService,
    private getDepartmentsService: GetDepartmentsService,
    private getCareersService: GetCareersService,
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
  
  getDepartaments$(schoolId?: number): Observable<Array<DepartmentItemVM>> {
    return this.getDepartmentsService.exec({schoolId});
  }

  getCareers$(): Observable<Array<CareerItemVM>> {
    return this.getCareersService.exec();
  }
}
