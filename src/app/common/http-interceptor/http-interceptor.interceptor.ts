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
    if(event?.status == 401) {
      // Array de mensajes de error de autenticación que requieren cierre de sesión
      const authErrorMessages = [
        'Debe iniciar sesión antes de continuar.',
        'Su sesión ha expirado.',
        'Algo ha ocurrido. Por favor, inicie sesión nuevamente.'
      ];

      // El mensaje está en event.error.message para errores HTTP
      const errorMessage = event?.error?.message;

      if (authErrorMessages.includes(errorMessage)) {
        this.userStateService.clear();
        // Limpiar todo el localStorage para asegurar un cierre completo
        localStorage.clear();
        // Redirigir al login
        this.router.navigate(['/auth']);
      }
    }
  }
}
