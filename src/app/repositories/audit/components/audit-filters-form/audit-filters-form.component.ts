import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuditAction } from 'dashboard-sdk';

import { AUDIT_ACTION_LABEL } from '../../constants/audit-labels';
import { AUDIT_RESOURCE_OPTIONS } from '../../constants/audit-resources';

/** Formulario de filtros del listado de auditoría. */
@Component({
  selector: 'app-audit-filters-form',
  templateUrl: './audit-filters-form.component.html',
  styleUrls: ['./audit-filters-form.component.scss'],
})
export class AuditFiltersFormComponent {
  @Input({ required: true }) form!: FormGroup;
  @Output() apply = new EventEmitter<void>();
  @Output() clear = new EventEmitter<void>();

  readonly actionOptions = Object.values(AuditAction).map((value) => ({
    value,
    label: AUDIT_ACTION_LABEL[value],
  }));
  readonly resourceOptions = AUDIT_RESOURCE_OPTIONS;
  readonly httpMethods: Array<{ value: string; label: string }> = [
    { value: 'GET', label: 'GET' },
    { value: 'POST', label: 'POST' },
    { value: 'PATCH', label: 'PATCH' },
    { value: 'PUT', label: 'PUT' },
    { value: 'DELETE', label: 'DELETE' },
  ];
  readonly successOptions: Array<{ value: boolean | null; label: string }> = [
    { value: null, label: 'Todos' },
    { value: true, label: 'Exitoso' },
    { value: false, label: 'Fallido' },
  ];
}
