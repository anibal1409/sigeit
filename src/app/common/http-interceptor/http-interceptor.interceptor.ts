import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {
  Observable,
  tap,
} from 'rxjs';
import { ToastService } from 'toast';

import { DEMAND_PREFERENCE_KEYS } from '../subject-demand/subject-demand-store.service';
import { UserStateService } from '../user-state';
import {
  FORBIDDEN_MESSAGE,
  INACTIVE_USER_MESSAGE,
} from './http-errors';

/**
 * Tratamiento global de las respuestas de error de la API:
 * - **401** (sesión inválida o expirada) o **403 de usuario inactivo/eliminado**: cierra la
 *   sesión y lleva al login.
 * - **403** por falta de permiso: muestra un aviso genérico, así ninguna pantalla tiene
 *   que tratarlo por su cuenta (ver `isHandledHttpError`).
 *
 * Las peticiones a `/auth/` se ignoran: el login con credenciales erróneas también
 * responde 401 y no debe cerrar ni redirigir nada.
 */
@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(
    private userStateService: UserStateService,
    private router: Router,
    private toastService: ToastService,
  ) {}

  /** Deja pasar la petición y reacciona a sus errores de autenticación y permisos. */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        error: (error: HttpErrorResponse) => {
          if (!request.url.includes('/auth/')) {
            this.handleError(error);
          }
        },
      }),
    );
  }

  /** Decide si la respuesta cierra la sesión o solo avisa de falta de permiso. */
  private handleError(error: HttpErrorResponse): void {
    if (error.status === 401 || (error.status === 403 && error.error?.message === INACTIVE_USER_MESSAGE)) {
      this.logout();
    } else if (error.status === 403) {
      this.toastService.error(FORBIDDEN_MESSAGE);
    }
  }

  /** Cierra la sesión conservando solo las preferencias de demanda del navegador. */
  private logout(): void {
    this.userStateService.clear();
    const preferences = DEMAND_PREFERENCE_KEYS.map((key) => [key, localStorage.getItem(key)]);
    localStorage.clear();
    preferences.forEach(([key, value]) => value && localStorage.setItem(key as string, value));
    this.router.navigate(['/auth']);
  }
}
