import { inject } from '@angular/core';
import {
  CanActivateChildFn,
  Router,
} from '@angular/router';

import { UserStateService } from '../common/user-state';
import { canAccessSection } from './data';

/**
 * Impide entrar por URL a secciones del panel que el rol no tiene en el menú y lleva al
 * inicio del panel. Es solo una ayuda de la UI: los permisos reales los valida la API.
 *
 * Se mira únicamente la sección (`/dashboard/<sección>/…`): las rutas internas no se
 * comparan con el menú porque algunas comparten nombre con otras opciones
 * (p. ej. `scheludes/academic-charge`).
 */
export const roleGuard: CanActivateChildFn = (_childRoute, state) => {
  const section = state.url.split(/[?#]/)[0].split('/')[2] || '';
  const role = inject(UserStateService).getRole();
  return canAccessSection(role, section) || inject(Router).createUrlTree(['/dashboard']);
};
