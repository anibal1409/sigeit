import { AuditAction } from 'dashboard-sdk';

/** Filtros del listado y estadísticas de auditoría (mapeo 1:1 a query de la API). */
export interface AuditListQuery {
  userId?: string;
  userEmail?: string;
  action?: AuditAction;
  actions?: string;
  resource?: string;
  resourceId?: string;
  success?: boolean;
  httpMethod?: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
  from?: string;
  to?: string;
  search?: string;
  authOnly?: boolean;
  page?: number;
  limit?: number;
}
