import { Injectable } from '@angular/core';

import {
  BehaviorSubject,
  Observable,
} from 'rxjs';

import { UserStateVM } from './models';

@Injectable({ providedIn: 'root' })
export class UserStateService {
  private user$ = new BehaviorSubject<UserStateVM | null>(null);

  getUser$(): Observable<UserStateVM | null> {
    return this.user$.asObservable();
  }

  getUser(): UserStateVM | null {
    this.validateTimeStamp();
    return this.user$.value || this.getUserStorage();
  }

  setUser(user: UserStateVM | null): void {
    this.user$.next(user);
    localStorage.setItem('sigeit-user', JSON.stringify(user));
  }

  clear(): void {
    this.user$.next(null);
    localStorage.removeItem('sigeit-user');
  }

  getUserStorage(): UserStateVM | null {
    let user = null;
    const userString = localStorage.getItem('sigeit-user');
    if (userString) {
      user = JSON.parse(userString) as UserStateVM;
    }

    return user;
  }

  getUserId(): number | undefined {
    return this.getUser()?.id;
  }

  getRole(): string {
    return this.getUser()?.role || '';
  }

  getSchoolId(): number | undefined {
    return this.getUser()?.school?.id;
  }

  getDepartmentId(): number | undefined {
    return this.getUser()?.department?.id;
  }

  getTeacherId(): number | undefined {
    return this.getUser()?.teacher?.id;
  }

  getCareerId(): number | undefined {
    return this.getUser()?.career?.id;
  }

  private validateTimeStamp(): void {
    const user = this.getUserStorage();
    if (user) {
      if (user.loginStamp + 60 * 60 * 1000 < Date.now()) {
        this.clear();
      }
    }
  }
    
}
