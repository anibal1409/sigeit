import { ResponseAuditLogDto } from 'dashboard-sdk';

import { AUDIT_ACTION_LABEL } from '../constants/audit-labels';

/**
 * Genera y descarga un CSV con los registros de auditoría visibles o exportados.
 */
export function downloadAuditCsv(rows: Array<ResponseAuditLogDto>, fileName = 'auditoria.csv'): void {
  const header = [
    'fecha',
    'email',
    'acción',
    'recurso',
    'resourceId',
    'éxito',
    'ip',
    'cliente',
    'path',
  ];
  const lines = rows.map((row) =>
    [
      row.createdAt,
      row.userEmail ?? row.userId ?? '',
      AUDIT_ACTION_LABEL[row.action as keyof typeof AUDIT_ACTION_LABEL] ?? row.action,
      row.resource,
      row.resourceId ?? '',
      row.success ? 'sí' : 'no',
      row.ipAddress ?? '',
      row.clientSummary ?? '',
      row.path,
    ]
      .map(csvEscape)
      .join(','),
  );
  const blob = new Blob([`\ufeff${[header.join(','), ...lines].join('\n')}`], {
    type: 'text/csv;charset=utf-8',
  });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(link.href);
}

function csvEscape(value: string): string {
  if (/[",\n]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}
