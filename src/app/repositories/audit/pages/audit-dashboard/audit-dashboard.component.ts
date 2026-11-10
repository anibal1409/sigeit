import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import { AuditAction, AuditStatsDto, ResponseAuditLogDto } from 'dashboard-sdk';
import {
  finalize,
  firstValueFrom,
  forkJoin,
  Subscription,
} from 'rxjs';
import { ToastService } from 'toast';

import { isHandledHttpError } from '../../../../common/http-interceptor';
import { StateService } from '../../../../common/state';
import { writeUrlQuery } from '../../../../common/url-query';
import { AuditFacade } from '../../services/audit-facade.service';
import { downloadAuditCsv } from '../../services/audit-csv';
import { auditQueryFromForm } from '../../services/audit-query-builder';
import { AuditListQuery } from '../../services/audit-list-query';

/** Panel principal de auditoría: filtros, KPIs, gráficos y tabla. */
@Component({
  selector: 'app-audit-dashboard',
  templateUrl: './audit-dashboard.component.html',
  styleUrls: ['./audit-dashboard.component.scss'],
})
export class AuditDashboardComponent implements OnInit, OnDestroy {
  filterForm!: FormGroup;
  items: Array<ResponseAuditLogDto> = [];
  stats: AuditStatsDto | null = null;
  total = 0;
  pageIndex = 0;
  pageSize = 25;
  loading = false;
  exporting = false;

  private sub$ = new Subscription();

  constructor(
    private readonly fb: FormBuilder,
    private readonly facade: AuditFacade,
    private readonly stateService: StateService,
    private readonly toast: ToastService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      search: [''],
      userEmail: [''],
      userId: [''],
      actions: [[] as Array<AuditAction>],
      resource: [''],
      resourceId: [''],
      success: [null as boolean | null],
      httpMethod: [''],
      from: [''],
      to: [''],
      authOnly: [false],
    });
    this.restoreFromUrl();
    this.load();
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  applyFilters(): void {
    this.pageIndex = 0;
    this.syncUrl();
    this.load();
  }

  clearFilters(): void {
    this.filterForm.reset({
      search: '',
      userEmail: '',
      userId: '',
      actions: [],
      resource: '',
      resourceId: '',
      success: null,
      httpMethod: '',
      from: '',
      to: '',
      authOnly: false,
    });
    this.pageIndex = 0;
    this.syncUrl();
    this.load();
  }

  onPage(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.syncUrl();
    this.load();
  }

  openRow(row: ResponseAuditLogDto): void {
    void this.router.navigate(['/dashboard/audit', row.id]);
  }

  openEntity(link: { resource: string; resourceId: string }): void {
    void this.router.navigate(['/dashboard/audit/entity'], {
      queryParams: { resource: link.resource, entityId: link.resourceId },
    });
  }

  /** Exporta hasta 20 páginas con los filtros actuales. */
  async exportCsv(): Promise<void> {
    const base = auditQueryFromForm(this.filterForm);
    this.exporting = true;
    try {
      const rows: Array<ResponseAuditLogDto> = [];
      const maxPages = 20;
      for (let page = 1; page <= maxPages; page++) {
        const res = await firstValueFrom(this.facade.list({ ...base, page, limit: 100 }));
        rows.push(...res.items);
        if (rows.length >= res.total) {
          break;
        }
      }
      downloadAuditCsv(rows);
    } catch (error) {
      this.notifyLoadError(error);
    } finally {
      this.exporting = false;
    }
  }

  private load(): void {
    const base = auditQueryFromForm(this.filterForm);
    const query: AuditListQuery = {
      ...base,
      page: this.pageIndex + 1,
      limit: this.pageSize,
    };
    this.setLoading(true);
    this.sub$.add(
      forkJoin({
        page: this.facade.list(query),
        stats: this.facade.stats(base),
      })
        .pipe(finalize(() => this.setLoading(false)))
        .subscribe({
          next: ({ page, stats }) => {
            this.items = page.items;
            this.total = page.total;
            this.stats = stats;
          },
          error: (error) => this.notifyLoadError(error),
        }),
    );
  }

  private restoreFromUrl(): void {
    const q = this.route.snapshot.queryParamMap;
    this.pageIndex = Math.max(0, +(q.get('page') || 1) - 1);
    this.pageSize = +(q.get('limit') || 25) || 25;
    const actionsRaw = q.get('actions') || '';
    const actions = actionsRaw
      ? (actionsRaw.split(',').filter(Boolean) as Array<AuditAction>)
      : [];
    const successParam = q.get('success');
    let success: boolean | null = null;
    if (successParam === 'true') {
      success = true;
    } else if (successParam === 'false') {
      success = false;
    }
    this.filterForm.patchValue({
      search: q.get('search') || '',
      userEmail: q.get('userEmail') || '',
      userId: q.get('userId') || '',
      actions,
      resource: q.get('resource') || '',
      resourceId: q.get('resourceId') || '',
      success,
      httpMethod: q.get('httpMethod') || '',
      from: q.get('fromDay') || '',
      to: q.get('toDay') || '',
      authOnly: q.get('authOnly') === 'true',
    });
  }

  private syncUrl(): void {
    const raw = this.filterForm.getRawValue();
    writeUrlQuery(this.router, this.route, {
      search: raw.search || null,
      userEmail: raw.userEmail || null,
      userId: raw.userId || null,
      actions: raw.actions?.length ? raw.actions.join(',') : null,
      resource: raw.resource || null,
      resourceId: raw.resourceId || null,
      success: raw.success === null || raw.success === undefined ? null : String(raw.success),
      httpMethod: raw.httpMethod || null,
      fromDay: raw.from || null,
      toDay: raw.to || null,
      authOnly: raw.authOnly ? 'true' : null,
      page: this.pageIndex + 1,
      limit: this.pageSize,
    });
  }

  private setLoading(value: boolean): void {
    this.loading = value;
    this.stateService.setLoading(value);
  }

  private notifyLoadError(error: unknown): void {
    if (isHandledHttpError(error as { status?: number })) {
      return;
    }
    const status = (error as { status?: number })?.status;
    if (status === 400) {
      this.toast.error('Filtro inválido. Revise recurso, acciones o fechas.');
      return;
    }
    this.toast.error('No se pudo cargar la auditoría');
  }
}
