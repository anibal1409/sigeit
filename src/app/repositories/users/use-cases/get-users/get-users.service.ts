import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import { User2UserVM } from '../../mappers';
import { HttpClient } from '@angular/common/http';
import { UserItemVM } from '../../model/user-item-vm';

@Injectable()
export class GetUsersService {
  constructor(private httpClient: HttpClient) {}

  exec(): Observable<Array<UserItemVM>> {
    return this.httpClient
      .get('http://localhost:3000/users')
      .pipe(map((users: any) => users.map(User2UserVM)));
  }
}
