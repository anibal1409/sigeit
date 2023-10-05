import { Injectable } from '@angular/core';

import { SectionService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import {
  Section2SectionItemVM,
  SectionBaseQuery,
  SectionItemVM,
  SectionMemoryService,
} from '../../';
import { UseCase } from '../../../../common/memory-repository';

@Injectable()
export class GetSetcionsService 
implements UseCase<Array<SectionItemVM> | null, SectionBaseQuery> {

  constructor(
    private entityServices: SectionService,
    private memoryService: SectionMemoryService,
  ) {}

  exec(data: SectionBaseQuery, memory = true): Observable<Array<SectionItemVM>> {
    return this.entityServices.sectionControllerFindAll(
      data?.departmentId || 0,
      data?.periodId || 0,
      data?.subjectId,
      data?.teacherId,
      data?.semester,
    )
    .pipe(
      map((entities: any) => entities.map(Section2SectionItemVM)),
      tap((entity) => {
        if(memory) {
          this.memoryService.setDataSource(entity);
        }
      })
    );
  }
}

