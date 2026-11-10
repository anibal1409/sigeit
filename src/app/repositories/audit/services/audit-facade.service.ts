import { Injectable } from '@angular/core';

import {
  AuditService,
  EntityAuditHistoryDto,
  AuditLogsPageDto,
  AuditStatsDto,
  ResponseAuditLogDto,
} from 'dashboard-sdk';
import { Observable } from 'rxjs';

import { AuditListQuery } from './audit-list-query';

/**
 * Facade sobre AuditService: evita los muchos argumentos posicionales del SDK generado.
 */
@Injectable({ providedIn: 'root' })
export class AuditFacade {
  constructor(private readonly api: AuditService) {}

  /** Página de registros de auditoría. */
  list(query: AuditListQuery): Observable<AuditLogsPageDto> {
    const q = query;
    return this.api.auditControllerFindLogs(
      q.userId,
      q.userEmail,
      q.action,
      q.actions,
      q.resource,
      q.resourceId,
      q.success,
      q.httpMethod,
      q.from,
      q.to,
      q.search,
      q.authOnly,
      q.page ?? 1,
      q.limit ?? 50,
    );
  }

  /** KPIs y agregados con los mismos filtros que el listado (sin paginación). */
  stats(query: Omit<AuditListQuery, 'page' | 'limit'>): Observable<AuditStatsDto> {
    const q = query;
    return this.api.auditControllerFindStats(
      q.userId,
      q.userEmail,
      q.action,
      q.actions,
      q.resource,
      q.resourceId,
      q.success,
      q.httpMethod,
      q.from,
      q.to,
      q.search,
      q.authOnly,
    );
  }

  /** Detalle de un evento por id. */
  detail(id: number): Observable<ResponseAuditLogDto> {
    return this.api.auditControllerFindOne(id);
  }

  /** Historial de mutaciones sobre una entidad. */
  entityHistory(resource: string, entityId: number): Observable<EntityAuditHistoryDto> {
    return this.api.auditControllerFindByEntity(resource, entityId);
  }
}
