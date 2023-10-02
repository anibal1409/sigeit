import { Injectable } from '@angular/core';

import { UserService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../../common/memory-repository';
import { UserMemoryService } from '../../memory';

@Injectable()
export class DeleteUserService implements UseCase<number, number> {
  constructor(
    private entityServices: UserService,
    private memoryService: UserMemoryService,
  ) { }

  exec(id: number): Observable<number> {
    return this.entityServices.userControllerRemove(id).pipe(
      map(() => 1),
      tap(() => {
        this.memoryService.delete(id);
      })
    );
  }
}
