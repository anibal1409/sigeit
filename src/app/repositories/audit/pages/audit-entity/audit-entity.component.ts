import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import { ResponseAuditLogDto } from 'dashboard-sdk';
import {
  finalize,
  Subscription,
} from 'rxjs';
import { ToastService } from 'toast';

import { isHandledHttpError } from '../../../../common/http-interceptor';
import { StateService } from '../../../../common/state';
import { AUDIT_ACTION_LABEL } from '../../constants/audit-labels';
import { auditResourceLabel } from '../../constants/audit-resources';
import { AuditFacade } from '../../services/audit-facade.service';

/** Historial de auditoría de una entidad concreta. */
@Component({
  selector: 'app-audit-entity',
  templateUrl: './audit-entity.component.html',
  styleUrls: ['./audit-entity.component.scss'],
})
export class AuditEntityComponent implements OnInit, OnDestroy {
  resource = '';
  entityId = 0;
  records: Array<ResponseAuditLogDto> = [];
  loading = false;
  private sub$ = new Subscription();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly facade: AuditFacade,
    private readonly stateService: StateService,
    private readonly toast: ToastService,
  ) {}

  ngOnInit(): void {
    this.resource = this.route.snapshot.queryParamMap.get('resource') || '';
    this.entityId = +(this.route.snapshot.queryParamMap.get('entityId') || 0);
    if (!this.resource || !this.entityId) {
      void this.router.navigate(['/dashboard/audit']);
      return;
    }
    this.load();
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  titleResource(): string {
    return auditResourceLabel(this.resource);
  }

  actionLabel(action: ResponseAuditLogDto['action']): string {
    return AUDIT_ACTION_LABEL[action as keyof typeof AUDIT_ACTION_LABEL] ?? action;
  }

  formatDate(iso: string): string {
    return new Date(iso).toLocaleString('es-VE');
  }

  openRecord(row: ResponseAuditLogDto): void {
    void this.router.navigate(['/dashboard/audit', row.id]);
  }

  back(): void {
    void this.router.navigate(['/dashboard/audit']);
  }

  private load(): void {
    this.loading = true;
    this.stateService.setLoading(true);
    this.sub$.add(
      this.facade
        .entityHistory(this.resource, this.entityId)
        .pipe(
          finalize(() => {
            this.loading = false;
            this.stateService.setLoading(false);
          }),
        )
        .subscribe({
          next: (history) => {
            this.records = history.records;
          },
          error: (error) => {
            if (isHandledHttpError(error)) {
              return;
            }
            this.toast.error('No se pudo cargar el historial');
            this.back();
          },
        }),
    );
  }
}
