import { Injectable } from '@angular/core';

import { UserStateVM } from './models';

/** Clave de `localStorage` donde se guarda la sesión del usuario. */
const STORAGE_KEY = 'sigeit-user';
/** Duración de la sesión en la UI: una hora desde el inicio de sesión. */
const SESSION_TTL_MS = 60 * 60 * 1000;

/**
 * Sesión del usuario en el frontend: datos básicos, rol y pertenencias (escuela,
 * departamento, profesor, carrera).
 *
 * Solo sirve para adaptar la interfaz. Los permisos reales los valida el backend: estos
 * datos viven en `localStorage` y el usuario podría modificarlos.
 */
@Injectable({ providedIn: 'root' })
export class UserStateService {
  /** Copia en memoria: `localStorage` se lee una sola vez, al crear el servicio. */
  private user: UserStateVM | null = this.readStorage();

  /** Usuario actual, o null si no hay sesión o ya expiró. */
  getUser(): UserStateVM | null {
    if (this.user && this.user.loginStamp + SESSION_TTL_MS < Date.now()) {
      this.clear();
    }
    return this.user;
  }

  /** Guarda la sesión tras iniciar sesión. */
  setUser(user: UserStateVM | null): void {
    this.user = user;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }

  /** Cierra la sesión en la UI. */
  clear(): void {
    this.user = null;
    localStorage.removeItem(STORAGE_KEY);
  }

  /** Id del usuario actual. */
  getUserId(): number | undefined {
    return this.getUser()?.id;
  }

  /** Rol del usuario actual ('' sin sesión). */
  getRole(): string {
    return this.getUser()?.role || '';
  }

  /** Escuela del usuario actual. */
  getSchoolId(): number | undefined {
    return this.getUser()?.school?.id;
  }

  /** Departamento asignado al usuario (jefe de departamento, planificador…). */
  getDepartmentId(): number | undefined {
    return this.getUser()?.department?.id;
  }

  /** Profesor vinculado al usuario. */
  getTeacherId(): number | undefined {
    return this.getUser()?.teacher?.id;
  }

  /** Carrera del usuario (estudiantes). */
  getCareerId(): number | undefined {
    return this.getUser()?.career?.id;
  }

  /** Lee la sesión guardada; si el contenido está corrupto, lo descarta en vez de romper la app. */
  private readStorage(): UserStateVM | null {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') as UserStateVM | null;
    } catch {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
  }
}
