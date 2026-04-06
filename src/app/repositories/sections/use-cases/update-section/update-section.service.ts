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
export class UpdateSectionService
  implements UseCase<SectionItemVM | null, SectionVM>
{
  constructor(
    private entityServices: SectionService,
    private memoryService: SectionMemoryService,
  ) { }

  exec(entitySave: SectionVM): Observable<SectionItemVM | null> {
    return this.entityServices
      .sectionControllerUpdate(entitySave.id || 0, {
        name: entitySave.name,
        status: !!entitySave.status,
        capacity: entitySave.capacity,
        subject: { id: entitySave.subjectId },
        period: { id: entitySave.periodId },
        teacher: { id: entitySave.teacherId },
        all: entitySave.all,
      })
      .pipe(
        map((raw: unknown) => Section2SectionItemVM(raw)),
        tap((entity: SectionItemVM) => {
          this.memoryService.update(entity);
        })
      );
  }
}
