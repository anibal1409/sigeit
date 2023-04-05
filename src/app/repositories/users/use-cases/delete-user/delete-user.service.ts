import { Injectable } from '@angular/core';

import { finalize, map, Observable, tap } from 'rxjs';

import { UsersService } from '@tecnops/dashboard-sdk';

import { UseCase } from '../../../common';
import { UsersMemoryService } from '../../memory';
import { ToastService } from '@tecnops/toast';

@Injectable()
export class DeleteUserService implements UseCase<number, number> {
  constructor(
    private usersService: UsersService,
    private memoryService: UsersMemoryService,
    private toastService: ToastService
  ) {}

  exec(id: number): Observable<number> {
    return this.usersService.usersControllerRemoveUser(id).pipe(
      map(() => 1),
      tap({
        next: () => {
          this.memoryService.delete(id);
        },
        complete: () => this.toastService.success('Operación Exitosa!'),
      })
    );
  }
}
