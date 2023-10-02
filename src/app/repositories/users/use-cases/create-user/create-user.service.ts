import { Injectable } from '@angular/core';

import { UserService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../../common/memory-repository';
import { User2UserItemVM } from '../../mappers';
import { UserMemoryService } from '../../memory';
import {
  UserItemVM,
  UserVM,
} from '../../model';

@Injectable()
export class CreateUserService
  implements UseCase<UserItemVM, UserVM>
{
  constructor(
    private entityServices: UserService,
    private memoryService: UserMemoryService,
  ) { }

  exec(entitySave: UserVM): Observable<UserItemVM> {
    return this.entityServices
      .userControllerCreate({
        status: !!entitySave.status,
        department: entitySave?.departmentId ? { id: entitySave?.departmentId } : undefined,
        email: entitySave.email,
        role: entitySave.role,
        name: entitySave.name,
        school: entitySave?.schoolId ? { id: entitySave?.schoolId } : undefined,
        idDocument: entitySave.idDocument,
      }
      )
      .pipe(
        map(User2UserItemVM),
        tap((entity) => {
          this.memoryService.create(entity);
        })
      );
  }
}