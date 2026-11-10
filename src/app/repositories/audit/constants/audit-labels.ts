import { AuditAction } from 'dashboard-sdk';

/** Etiqueta en español de cada acción de auditoría. */
export const AUDIT_ACTION_LABEL: Record<AuditAction, string> = {
  CREATE: 'Creación',
  UPDATE: 'Actualización',
  DELETE: 'Eliminación',
  OTHER: 'Otro',
  AUTH_LOGIN: 'Inicio de sesión',
  AUTH_LOGOUT: 'Cierre de sesión',
  AUTH_RECOVERY_REQUEST: 'Solicitud de recuperación',
  AUTH_RECOVERY_VALIDATE: 'Validación de recuperación',
  AUTH_RECOVERY_COMPLETE: 'Recuperación completada',
  AUTH_CHANGE_PASSWORD: 'Cambio de contraseña',
  AUTH_REGISTER_PUBLIC: 'Registro público',
  AUTH_OTHER: 'Autenticación (otro)',
};

/** Clase CSS del chip según tipo de acción. */
export function auditActionChipClass(action: AuditAction): string {
  if (action === AuditAction.Create) {
    return 'audit-chip--create';
  }
  if (action === AuditAction.Update) {
    return 'audit-chip--update';
  }
  if (action === AuditAction.Delete) {
    return 'audit-chip--delete';
  }
  if (String(action).startsWith('AUTH_')) {
    return 'audit-chip--auth';
  }
  return 'audit-chip--other';
}
