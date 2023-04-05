import { Injectable } from '@angular/core';

import { finalize, map, Observable, tap } from 'rxjs';

import { UsersService } from '@tecnops/dashboard-sdk';

import { UseCase } from '../../../common';
import { User2UserVM } from '../../mappers';
import { UsersMemoryService } from '../../memory';
import { SaveUser, UserVM } from '../../model';
import { ToastService } from '@tecnops/toast';

@Injectable()
export class CreateUserService implements UseCase<UserVM | null, SaveUser> {
  constructor(
    private usersService: UsersService,
    private memoryService: UsersMemoryService,
    private toastService: ToastService
  ) {}

  exec(user: SaveUser): Observable<UserVM | null> {
    return this.usersService.usersControllerCreate(user).pipe(
      map((users) => {
        return User2UserVM(users);
      }),
      tap({
        next: (users) => {
          this.memoryService.create(users);
        },
        complete: () => this.toastService.success('Operación Exitosa!'),
      })
    );
  }
}
