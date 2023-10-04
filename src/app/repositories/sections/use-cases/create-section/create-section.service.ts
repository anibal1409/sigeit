import { Injectable } from '@angular/core';

import { SectionService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../../common/memory-repository';
import { Section2SectionItemVM } from '../../mappers';
import { SectionMemoryService } from '../../memory';
import {
  SectionItemVM,
  SectionVM,
} from '../../model';

@Injectable()
export class CreateSectionService
  implements UseCase<SectionItemVM | null, SectionVM>
{
  constructor(
    private entityService: SectionService,
    private memoryService: SectionMemoryService,
  ) { }

  exec(entitySave: SectionVM): Observable<SectionItemVM | null> {
    return this.entityService
      .sectionControllerCreate({
        name: entitySave.name,
        status: !!entitySave.status,
        capacity: entitySave.capacity,
        subject: { id: entitySave.subjectId },
        period: { id: entitySave.periodId },
        teacher: { id: entitySave.teacherId },
      })
      .pipe(
        map(Section2SectionItemVM),
        tap((entity) => {
          this.memoryService.create(entity);
        })
      );
  }
}
