import { FormGroup } from '@angular/forms';
import { AuditAction } from 'dashboard-sdk';

import { AuditListQuery } from './audit-list-query';

/** Construye query API a partir del formulario de filtros (sin page/limit). */
export function auditQueryFromForm(form: FormGroup): Omit<AuditListQuery, 'page' | 'limit'> {
  const raw = form.getRawValue();
  const selected: Array<AuditAction> = raw.actions ?? [];
  const query: Omit<AuditListQuery, 'page' | 'limit'> = {};

  const search = String(raw.search ?? '').trim();
  if (search) {
    query.search = search;
  }
  const userEmail = String(raw.userEmail ?? '').trim();
  if (userEmail) {
    query.userEmail = userEmail;
  }
  const userId = String(raw.userId ?? '').trim();
  if (userId) {
    query.userId = userId;
  }
  if (selected.length === 1) {
    query.action = selected[0];
  } else if (selected.length > 1) {
    query.actions = selected.join(',');
  }
  const resource = String(raw.resource ?? '').trim();
  if (resource) {
    query.resource = resource;
  }
  const resourceId = String(raw.resourceId ?? '').trim();
  if (resourceId) {
    query.resourceId = resourceId;
  }
  if (raw.success === true || raw.success === false) {
    query.success = raw.success;
  }
  const httpMethod = raw.httpMethod as AuditListQuery['httpMethod'];
  if (httpMethod) {
    query.httpMethod = httpMethod;
  }
  const fromIso = dateInputToIsoStart(raw.from);
  const toIso = dateInputToIsoEnd(raw.to);
  if (fromIso) {
    query.from = fromIso;
  }
  if (toIso) {
    query.to = toIso;
  }
  if (raw.authOnly) {
    query.authOnly = true;
  }
  return query;
}

function dateInputToIsoStart(value: string): string | undefined {
  if (!value) {
    return undefined;
  }
  return new Date(`${value}T00:00:00`).toISOString();
}

function dateInputToIsoEnd(value: string): string | undefined {
  if (!value) {
    return undefined;
  }
  return new Date(`${value}T23:59:59.999`).toISOString();
}
