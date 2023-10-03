import { Injectable } from '@angular/core';

import { SubjectService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../../common/memory-repository';
import { SubjectMemoryService } from '../../memory';

@Injectable()
export class DeleteSubjectService implements UseCase<number, number> {
  constructor(
    private entityServices: SubjectService,
    private memoryService: SubjectMemoryService,
  ) { }

  exec(id: number): Observable<number> {
    return this.entityServices.subjectControllerRemove(id).pipe(
      map(() => 1),
      tap(() => {
        this.memoryService.delete(id);
      })
    );
  }
}
