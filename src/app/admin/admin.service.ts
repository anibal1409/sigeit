import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'dashboard-sdk';
import { finalize } from 'rxjs';

import {
  StateService,
  UserStateService,
} from '../common';

@Injectable()
export class AdminService {

  constructor(
    private router: Router,
    private userStateService: UserStateService,
    private authService: AuthService,
    private stateService: StateService,
  ) { }

  logout(): void {
    this.stateService.setLoading(true);
    this.authService.authControllerLogout()
    .pipe(
      finalize(() => this.stateService.setLoading(false))
    )
    .subscribe(
      () => {
        this.userStateService.clear();
        this.router.navigate(['/auth']);
      }
    )
  }
}
