import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import { User2UserItemVM } from '../../mappers';
import { HttpClient } from '@angular/common/http';
import { UserItemVM } from '../../model/user-item-vm';

@Injectable()
export class GetUsersService {
  constructor(private httpClient: HttpClient) {}

  exec(): Observable<Array<UserItemVM>> {
    return this.httpClient
      .get(
        'http://localhost:3000/users?_sort=last_name&_order=asc&_expand=department'
      )
      .pipe(map((users: any) => users.map(User2UserItemVM)));
  }
}
