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

  exec(data: SubjectBaseQuery = {}, memory = true): Observable<Array<SubjectItemVM>> {
    return this.entityServices.subjectControllerFindAll(
      data?.semester,
      data?.carrerId,
      data?.departmentId,
      data?.status,
    )
    .pipe(
      map((entities: any) => entities.map(Subject2SubjectItemVM)),
      tap((entity) => {
        if(memory) {
          this.memoryService.setDataSource(entity);
        }
      })
    );
  }
}
