import { Injectable } from '@angular/core';

import { UserService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import { User2UserItemVM } from '../../mappers';
import { UserItemVM } from '../../model/user-item-vm';

@Injectable()
export class GetUsersService {
  constructor(private userService: UserService) {}

  exec(): Observable<Array<UserItemVM>> {
    return this.userService.userControllerFindAll()
      .pipe(map((users: any) => users.map(User2UserItemVM)));
  }
}
