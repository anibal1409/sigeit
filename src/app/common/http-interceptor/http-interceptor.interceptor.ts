import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {
  Observable,
  tap,
} from 'rxjs';

import { UserStateService } from '../user-state';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(
    private userStateService: UserStateService,
    private router: Router,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            this.exec(event);
          }
          return event;
        },
        error: (error) => {
          this.exec(error);
        }
      }));
  }

  private exec(event: any): void {
    if(event?.status == 401 &&  event?.error === 'Unauthorized' && event?.message === 'Su sesión ha expirado.') {
      this.userStateService.clear();
      this.router.navigate(['/auth']);
    }
  }
}
