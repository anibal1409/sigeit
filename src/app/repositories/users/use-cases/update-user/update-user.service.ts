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
export class UpdateUserService
  implements UseCase<UserItemVM | null, UserVM>
{
  constructor(
    private entityServices: UserService,
    private memoryService: UserMemoryService,
  ) { }

  exec(entitySave: UserVM): Observable<UserItemVM | null> {
    return this.entityServices
      .userControllerUpdate({
        status: !!entitySave.status,
        department: { id: entitySave?.departmentId || 0 },
        email: entitySave.email as any,
        role: entitySave.role as any,
        name: entitySave.name,
        school: { id: entitySave?.schoolId || 0 },
        idDocument: entitySave.idDocument,
      }, entitySave.id || 0)
      .pipe(
        map(User2UserItemVM),
        tap((entity) => {
          this.memoryService.update(entity);
        })
      );
  }
}
