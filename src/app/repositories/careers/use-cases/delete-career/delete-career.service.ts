import { Injectable } from '@angular/core';

import { CareerService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../../common';
import { CareerMemoryService } from '../../memory';

@Injectable()
export class DeleteCareerService implements UseCase<number, number> {
  constructor(
    private entityServices: CareerService,
    private memoryService: CareerMemoryService,
  ) {}

  exec(id: number): Observable<number> {
    return this.entityServices.careerControllerRemove(id).pipe(
      map(() => 1),
      tap(() => {
        this.memoryService.delete(id);
      })
    );
  }
}
