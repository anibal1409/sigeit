import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import {
  PeriodAuditDto,
  ScheduleLiteDto,
} from 'dashboard-sdk';
import { Subscription } from 'rxjs';

import {
  StateService,
  UserStateService,
} from '../../../common';
import { DepartmentVM } from '../../departments/model';
import { SchedulesService } from '../schedules.service';

/** Texto del estado de cobertura de horas de una sección. */
const COVERAGE_LABELS: Record<string, string> = {
  EMPTY: 'Sin horario',
  INCOMPLETE: 'Incompleta',
  COMPLETE: 'Completa',
  EXCEEDED: 'Excedida',
};

/**
 * Auditoría de la planificación del período activo: choques de aula, profesor
 * y nivel, bloques fuera de franja y secciones con horas incompletas.
 */
@Component({
  selector: 'app-planning-audit',
  templateUrl: './planning-audit.component.html',
  styleUrls: ['./planning-audit.component.scss']
})
export class PlanningAuditComponent implements OnInit, OnDestroy {
  departments: Array<DepartmentVM> = [];
  departmentCtrl = new FormControl<number | null>(null);
  departmentIdUser = 0;
  periodId = 0;
  periodName = '';
  audit: PeriodAuditDto | null = null;
  coverageLabels = COVERAGE_LABELS;

  private sub$ = new Subscription();

  constructor(
    private schedulesService: SchedulesService,
    private stateService: StateService,
    private userStateService: UserStateService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.departmentIdUser = this.userStateService.getDepartmentId() || 0;
    this.sub$.add(
      this.schedulesService.getLoading$().subscribe((loading) => this.stateService.setLoading(loading))
    );
    this.sub$.add(
      this.schedulesService.getActivePeriod$().subscribe((period) => {
        if (period?.id) {
          this.periodId = period.id;
          this.periodName = period.name;
          this.load();
        }
      })
    );
    this.sub$.add(this.departmentCtrl.valueChanges.subscribe(() => this.load()));
    if (!this.departmentIdUser) {
      this.sub$.add(
        this.schedulesService
          .getDepartaments$({ schoolId: this.userStateService.getSchoolId(), status: true })
          .subscribe((departments) => (this.departments = departments))
      );
    }
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  /** Recarga la auditoría del período para el departamento elegido (o todos). */
  load(): void {
    if (!this.periodId) {
      return;
    }
    const departmentId = this.departmentIdUser || this.departmentCtrl.value || undefined;
    this.sub$.add(
      this.schedulesService
        .getAudit$(this.periodId, departmentId)
        .subscribe((audit) => (this.audit = audit))
    );
  }

  /** Descripción corta de un horario para las tablas. */
  describe(item: ScheduleLiteDto): string {
    return `${item.subjectCode} ${item.subjectName} (${item.sectionName}) ${item.start} - ${item.end}`;
  }

  navigateBack(): void {
    this.router.navigate(['/dashboard/scheludes']);
  }
}
