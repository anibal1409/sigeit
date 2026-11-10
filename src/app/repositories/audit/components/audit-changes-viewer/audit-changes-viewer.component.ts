import { Component, Input } from '@angular/core';

/** Vista de `propertyChanges`: diff previous/current o campos enviados en CREATE. */
@Component({
  selector: 'app-audit-changes-viewer',
  templateUrl: './audit-changes-viewer.component.html',
  styleUrls: ['./audit-changes-viewer.component.scss'],
})
export class AuditChangesViewerComponent {
  @Input() action = '';
  @Input() propertyChanges: { [key: string]: unknown } | null | undefined = null;

  /** Filas para mostrar: campo, anterior, nuevo. */
  get rows(): Array<{ field: string; previous: string; current: string }> {
    if (!this.propertyChanges) {
      return [];
    }
    return Object.entries(this.propertyChanges).map(([field, value]) => {
      if (value && typeof value === 'object' && 'previous' in value) {
        const change = value as { previous?: unknown; current?: unknown };
        return {
          field,
          previous: formatAuditValue(change.previous),
          current: formatAuditValue(change.current),
        };
      }
      return {
        field,
        previous: '',
        current: formatAuditValue(value),
      };
    });
  }
}

function formatAuditValue(value: unknown): string {
  if (value === null || value === undefined) {
    return '—';
  }
  if (typeof value === 'object') {
    return JSON.stringify(value);
  }
  return String(value);
}
