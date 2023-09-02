import { Injectable } from '@angular/core';

import { ClassroomService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../../common/memory-repository';
import { ClassroomsMemoryService } from '../../memory';

@Injectable()
export class DeleteClassroomService implements UseCase<number, number> {
  constructor(
    private entityServices: ClassroomService,
    private memoryService: ClassroomsMemoryService,
  ) {}

  exec(id: number): Observable<number> {
    return this.entityServices.classroomControllerRemove(id).pipe(
      map(() => 1),
      tap(() => {
        this.memoryService.delete(id);
      })
    );
  }
}