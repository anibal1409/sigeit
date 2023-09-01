import { Injectable } from '@angular/core';

import { AuthService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UserStateService } from '../../common';
import { UserStateVM } from '../../common/user-state/models';

@Injectable()
export class LoginService {

  constructor(
    private authService: AuthService,
    private userStateService: UserStateService,
  ) { }

  exec(email: string, password: string): Observable<any> {
    return this.authService.authControllerLogin({
      email,
      password,
    })
    .pipe(
      map((response: any) => {
        return {
          id: response.id,
          email: response.email,
          name: response.name,
          role: response.role,
          loginStamp: response.loginStamp,
          department: response.department,
          school: response.school,
          teacher: response.teacher,
        };
      }),
      tap((user: UserStateVM) => {
        this.userStateService.setUser(user);
      })
    );
  }
}
