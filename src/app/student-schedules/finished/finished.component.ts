import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { StateService } from '../../common/state';
import { UserStateService } from '../../common/user-state';
import {
  PeriodVM,
  StagePeriod,
} from '../../repositories/periods';
import { InscriptionVM } from '../model';
import { StageInscription } from '../model/stage';
import { StudentSchedulesService } from '../student-schedules.service';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.scss']
})
export class FinishedComponent implements OnInit, OnDestroy {

  inscriptions: Array<InscriptionVM> = [];
  period!: PeriodVM;
  loading = false;
  credits = 0;
  subjectCounter = 0;
  
  displayedColumns: string[] = ['code', 'name', 'section'];
  dataSource: Array<InscriptionVM> = [];
  private sub$ = new Subscription();

  constructor(
    private stateService: StateService,
    private studentSchedulesService: StudentSchedulesService,
    private userStateService: UserStateService,
    private router: Router,
  ) { }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
    this.sub$.add(
      this.studentSchedulesService.getLoading$().subscribe((loading) => {
        this.loading = loading;
        this.stateService.setLoading(loading);
      })
    );
    this.loadActivePeriod();
  }
  

  private validateInscription(): void {
    const userId = this.userStateService.getUserId() || 0;
    const periodId = this.period?.id;
    if (periodId && userId) {
      this.sub$.add(
        this.studentSchedulesService.getInscriptions$({
          userId,
          periodId,
          stage: StageInscription.Registered,
        }).subscribe(
          (inscriptions) => {
            if (inscriptions?.length) {
              this.inscriptions = inscriptions;
              this.dataSource = inscriptions;
              this.credits = inscriptions.reduce((acc, curr) => acc + (curr?.section?.subject?.credits || 0), 0);
              this.subjectCounter = inscriptions.length;
            } else {
              this.router.navigate(['/dashboard/inscription']);
            }
          }
        )
      );
    }
  }

  private loadActivePeriod(): void {
    this.sub$.add(
      this.studentSchedulesService.getActivePeriod$().subscribe(
        (period) => {
          if (period?.id && period?.stage !== StagePeriod.toPlan || true) {
            this.period = period;
            this.validateInscription();
          }
        }
      )
    );
  }

}
