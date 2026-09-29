import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import {
  ResponseDepartmentDto,
  ResponsePeriodDto,
  ResponseSubjectDemandDto,
} from 'dashboard-sdk';
import {
  finalize,
  forkJoin,
  merge,
  of,
  Subscription,
  switchMap,
} from 'rxjs';

import {
  StateService,
  UserStateService,
} from '../../common';
import { ImportDemandComponent } from './import-demand/import-demand.component';
import { SubjectDemandsService } from './subject-demands.service';

@Component({
  selector: 'app-subject-demands',
  templateUrl: './subject-demands.component.html',
  styleUrls: ['./subject-demands.component.scss'],
})
export class SubjectDemandsComponent implements OnInit, OnDestroy {
  periods: Array<ResponsePeriodDto> = [];
  departments: Array<ResponseDepartmentDto> = [];
  periodCtrl = new FormControl<number | null>(null);
  departmentCtrl = new FormControl<number | null>(null);

  rows: Array<ResponseSubjectDemandDto> = [];
  displayedColumns = ['subjectCode', 'subjectName', 'level', 'quantity'];
  total = 0;
  subjectsCount = 0;
  loading = true;

  private sub$ = new Subscription();

  constructor(
    private subjectDemandsService: SubjectDemandsService,
    private stateService: StateService,
    private userStateService: UserStateService,
    private matDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.sub$.add(
      merge(this.periodCtrl.valueChanges, this.departmentCtrl.valueChanges).subscribe(() => this.loadDemand()),
    );

    this.setLoading(true);
    this.sub$.add(
      forkJoin([
        this.subjectDemandsService.getPeriods$(),
        this.subjectDemandsService.getDepartments$(this.userStateService.getSchoolId()),
      ])
        .pipe(
          switchMap(([periods, departments]) => {
            this.periods = periods;
            this.departments = departments;
            const periodId = (periods.find((period) => period.isActive) || periods[0])?.id ?? null;
            this.periodCtrl.setValue(periodId, { emitEvent: false });
            return periodId ? this.subjectDemandsService.getDemand$(periodId) : of([]);
          }),
          finalize(() => this.setLoading(false)),
        )
        .subscribe((rows) => this.setRows(rows)),
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  openImport(): void {
    const period = this.periods.find((item) => item.id === this.periodCtrl.value);
    if (!period) {
      return;
    }

    const dialogRef = this.matDialog.open(ImportDemandComponent, {
      data: { periodId: period.id, periodName: period.name },
      hasBackdrop: true,
      disableClose: true,
    });

    this.sub$.add(
      dialogRef.afterClosed().subscribe((imported) => {
        if (imported) {
          this.loadDemand();
        }
      }),
    );
  }

  private loadDemand(): void {
    const periodId = this.periodCtrl.value;
    if (!periodId) {
      this.setRows([]);
      return;
    }

    this.setLoading(true);
    this.sub$.add(
      this.subjectDemandsService
        .getDemand$(periodId, this.departmentCtrl.value ?? undefined)
        .pipe(finalize(() => this.setLoading(false)))
        .subscribe((rows) => this.setRows(rows)),
    );
  }

  private setLoading(loading: boolean): void {
    this.loading = loading;
    this.stateService.setLoading(loading);
  }

  private setRows(rows: Array<ResponseSubjectDemandDto>): void {
    this.rows = rows;
    this.total = rows.reduce((sum, row) => sum + row.quantity, 0);
    this.subjectsCount = new Set(rows.map((row) => row.subjectId)).size;
  }
}
