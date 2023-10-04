import { Injectable } from '@angular/core';

import { SubjectService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../../common/memory-repository';
import { Subject2SubjectItemVM } from '../../mappers';
import { SubjectMemoryService } from '../../memory';
import {
  SubjectBaseQuery,
  SubjectItemVM,
} from '../../model';

@Injectable()
export class GetSubjectsService
implements UseCase<Array<SubjectItemVM> | null, SubjectBaseQuery> {

  constructor(
    private entityServices: SubjectService,
    private memoryService: SubjectMemoryService,
  ) {}

  exec(data: SubjectBaseQuery = {}): Observable<Array<SubjectItemVM>> {
    return this.entityServices.subjectControllerFindAll(
      data?.carrerId,
      data?.departmentId,
      data?.semester,
    )
    .pipe(
      map((entities: any) => entities.map(Subject2SubjectItemVM)),
      tap((entity) => {
        this.memoryService.setDataSource(entity);
      })
    );
  }
}
