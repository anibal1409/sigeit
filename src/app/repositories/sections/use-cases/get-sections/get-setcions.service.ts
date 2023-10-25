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
export class GetSectionsService 
implements UseCase<Array<SectionItemVM> | null, SectionBaseQuery> {

  constructor(
    private entityServices: SectionService,
    private memoryService: SectionMemoryService,
  ) {}

  exec(data: SectionBaseQuery, memory = true): Observable<Array<SectionItemVM>> {
    return this.entityServices.sectionControllerFindAll(
      data?.periodId || 0,
      data?.departmentId,
      data?.subjectId,
      data?.teacherId,
      data?.semester,
      data?.dayId,
      data?.status,
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

