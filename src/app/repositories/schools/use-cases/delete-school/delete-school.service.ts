import { Injectable } from '@angular/core';

import { SchoolService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../../common';
import { SchoolMemoryService } from '../../memory';

@Injectable()
export class DeleteSchoolService implements UseCase<number, number> {
  constructor(
    private schoolService: SchoolService,
    private memoryService: SchoolMemoryService,
  ) {}

  exec(id: number): Observable<number> {
    return this.schoolService.schoolControllerRemove(id).pipe(
      map(() => 1),
      tap(() => {
        this.memoryService.delete(id);
      })
    );
  }
}
