import { Injectable } from '@angular/core';

import { UserService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import {
  BaseQuery,
  UseCase,
} from '../../../../common/memory-repository';
import { User2UserVM } from '../../mappers';
import { UserItemVM } from '../../model';

@Injectable()
export class FindUserService
  implements UseCase<UserItemVM | null, BaseQuery>
{
  constructor(private entityServices: UserService) { }

  exec(data: BaseQuery): Observable<UserItemVM> {
    return this.entityServices
      .userControllerFindOne(data?.id || 0)
      .pipe(map(User2UserVM));
  }
}
