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

/** Detalle de un evento de auditoría. */
@Component({
  selector: 'app-audit-detail',
  templateUrl: './audit-detail.component.html',
  styleUrls: ['./audit-detail.component.scss'],
})
export class AuditDetailComponent implements OnInit, OnDestroy {
  record: ResponseAuditLogDto | null = null;
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
    const id = +(this.route.snapshot.paramMap.get('id') || 0);
    if (!id) {
      void this.router.navigate(['/dashboard/audit']);
      return;
    }
    this.load(id);
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  actionLabel(): string {
    if (!this.record) {
      return '';
    }
    return AUDIT_ACTION_LABEL[this.record.action as keyof typeof AUDIT_ACTION_LABEL] ?? this.record.action;
  }

  resourceLabel(): string {
    return this.record ? auditResourceLabel(this.record.resource) : '';
  }

  formatDate(iso: string): string {
    return new Date(iso).toLocaleString('es-VE');
  }

  back(): void {
    void this.router.navigate(['/dashboard/audit'], { queryParams: this.route.snapshot.queryParams });
  }

  private load(id: number): void {
    this.loading = true;
    this.stateService.setLoading(true);
    this.sub$.add(
      this.facade
        .detail(id)
        .pipe(finalize(() => {
          this.loading = false;
          this.stateService.setLoading(false);
        }))
        .subscribe({
          next: (record) => {
            this.record = record;
          },
          error: (error) => {
            if (isHandledHttpError(error)) {
              return;
            }
            if (error?.status === 404) {
              this.toast.error('Registro no encontrado');
            } else {
              this.toast.error('No se pudo cargar el detalle');
            }
            this.back();
          },
        }),
    );
  }
}
