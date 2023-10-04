import { Injectable } from '@angular/core';

import { SectionService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../../common/memory-repository';
import { SectionMemoryService } from '../../memory';

@Injectable()
export class RemoveSectionService implements UseCase<number, number> {
  constructor(
    private entityService: SectionService,
    private memoryService: SectionMemoryService,
  ) {}

  exec(id: number): Observable<number> {
    return this.entityService.sectionControllerRemove(id).pipe(
      map(() => 1),
      tap(() => {
        this.memoryService.delete(id);
      })
    );
  }
}
