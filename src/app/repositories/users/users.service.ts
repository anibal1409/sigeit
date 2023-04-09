import { Injectable } from '@angular/core';

import { GetUsersService } from './use-cases/get-users/get-users.service';
import { Observable } from 'rxjs';
import { UserVM } from './model';
@Injectable()
export class UsersService {
  constructor(private getUsersService: GetUsersService) {}

  getUsers$(): Observable<Array<UserVM>> {
    return this.getUsersService.exec();
  }
}
