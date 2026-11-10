import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ResponseAuditLogDto } from 'dashboard-sdk';

import {
  AUDIT_ACTION_LABEL,
  auditActionChipClass,
} from '../../constants/audit-labels';
import { auditResourceLabel } from '../../constants/audit-resources';

/** Tabla paginada de registros de auditoría. */
@Component({
  selector: 'app-audit-logs-table',
  templateUrl: './audit-logs-table.component.html',
  styleUrls: ['./audit-logs-table.component.scss'],
})
export class AuditLogsTableComponent {
  @Input() items: Array<ResponseAuditLogDto> = [];
  @Input() total = 0;
  @Input() pageIndex = 0;
  @Input() pageSize = 25;
  @Output() pageChange = new EventEmitter<PageEvent>();
  @Output() rowOpen = new EventEmitter<ResponseAuditLogDto>();
  @Output() entityOpen = new EventEmitter<{ resource: string; resourceId: string }>();

  readonly displayedColumns = [
    'createdAt',
    'user',
    'action',
    'resource',
    'success',
    'client',
    'ip',
  ];

  actionLabel(item: ResponseAuditLogDto): string {
    return AUDIT_ACTION_LABEL[item.action as keyof typeof AUDIT_ACTION_LABEL] ?? item.action;
  }

  chipClass(item: ResponseAuditLogDto): string {
    return auditActionChipClass(item.action);
  }

  resourceLabel(resource: string): string {
    return auditResourceLabel(resource);
  }

  actor(item: ResponseAuditLogDto): string {
    return item.userEmail ?? item.userId ?? '—';
  }

  formatDate(iso: string): string {
    return new Date(iso).toLocaleString('es-VE');
  }
}
