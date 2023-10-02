import { Injectable } from '@angular/core';

import { UserService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import {
  BaseQuery,
  UseCase,
} from '../../../../common/memory-repository';
import { User2UserItemVM } from '../../mappers';
import { UserMemoryService } from '../../memory';
import { UserItemVM } from '../../model/user-item-vm';

@Injectable()
export class GetUsersService
  implements UseCase<Array<UserItemVM> | null, BaseQuery> {

  constructor(
    private entityServices: UserService,
    private memoryService: UserMemoryService,
  ) { }

  exec(data: BaseQuery = {}): Observable<Array<UserItemVM>> {
    return this.entityServices.userControllerFindAll()
      .pipe(
        map((entities: any) => entities.map(User2UserItemVM)),
        tap((entity) => {
          this.memoryService.setDataSource(entity);
        })
      );
  }
}
