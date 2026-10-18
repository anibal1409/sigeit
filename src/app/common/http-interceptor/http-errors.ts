/** Mensaje de la API (403) cuando el usuario fue desactivado o eliminado: implica cerrar sesión. */
export const INACTIVE_USER_MESSAGE = 'Inactive or deleted user.';

/** Aviso que muestra el interceptor ante cualquier otro 403. */
export const FORBIDDEN_MESSAGE = 'No tiene permiso para esta acción';

/**
 * Indica si el interceptor ya trató el error (401 o 403). Las pantallas lo usan para no
 * mostrar un segundo aviso por el mismo error.
 */
export function isHandledHttpError(error: { status?: number } | null | undefined): boolean {
  return error?.status === 401 || error?.status === 403;
}
