import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Subscription } from 'rxjs';

import { StateService } from '../../common/state';
import { UserStateService } from '../../common/user-state';
import { PeriodVM } from '../../repositories/periods';
import {
  DayVM,
  ScheduleItemVM,
} from '../../repositories/schedules/model';
import {
  ScheduleDetailsComponent,
} from '../../repositories/schedules/schedule-details';
import { StageInscription } from '../model';
import { StudentSchedulesService } from '../student-schedules.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit, OnDestroy {
  startIntervals: Array<string> = [];
  endIntervals: Array<string> = [];
  days: Array<DayVM> = [];
  dataSchedule: any[][] = this.startIntervals.map(() =>
    this.days.map(() => {
      return { text: '', schedules: [] };
    })
  );
  dataSource: any[] = [];
  displayedColumns: string[] = ['hora'];
  loading = false;
  period!: PeriodVM;

  private sub$ = new Subscription();

  constructor(
    private stateService: StateService,
    private studentSchedulesService: StudentSchedulesService,
    private userStateService: UserStateService,
    private matDialog: MatDialog,
  ) {}

  
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
    this.loadDays();
    this.loadIntervals();
  }

  private loadDays(): void {
    this.sub$.add(
      this.studentSchedulesService
        .getDays$()
        .subscribe((days) => {
          this.days = days;
          this.displayedColumns = ['hora'];
          days.forEach((day) => {
            this.displayedColumns.push(day.name);
          });
        })
    );
  }

  private loadIntervals(): void {
    this.sub$.add(
      this.studentSchedulesService
        .getActivePeriod$()
        .subscribe((period) => {
          if (period?.id) {
            this.period = period;
            const intervals = this.studentSchedulesService.intervals(
              period.startTime,
              period.endTime,
              period.duration,
              period.interval
            );
            this.startIntervals = intervals.start;
            this.endIntervals = intervals.end;
            this.loadSchedules();
          }
        })
    );
  }

  private clearSchedule(): void {
    this.dataSchedule = this.startIntervals.map(() =>
      this.days.map(() => {
        return { text: '', schedules: [] };
      })
    );
    this.dataSource = [];
  }

  private loadSchedules(): void {
    const userId = this.userStateService.getUserId();
    const periodId = this.period?.id;
    if (periodId && userId) {
      this.sub$.add(
        this.studentSchedulesService
          .getInscriptions$({
            userId,
            periodId,
            stage: StageInscription.Registered,
            schedules: true,
          })
          .subscribe((inscriptions) => {
            const schedules: Array<ScheduleItemVM> = [];
            inscriptions.forEach((inscription) => {
              if (inscription?.section?.schedules?.length) {
                schedules.push(...inscription.section.schedules);
              }
            });
            
            this.clearSchedule();

            schedules.forEach((schedule) => {
              const dayIndex = this.days.findIndex(
                (day) => day.id === schedule.day?.id
              );
              const startIndex = this.startIntervals.indexOf(schedule.start);
              const endIndex = this.endIntervals.indexOf(schedule.end);

              for (let i = startIndex; i <= endIndex; i++) {

                this.dataSchedule[i][dayIndex].schedules.push(schedule);
                if (this.dataSchedule[i][dayIndex]?.text) {
                  this.dataSchedule[i][dayIndex].text = 'Varias';
                } else {
                  this.dataSchedule[i][
                    dayIndex
                  ].text = `${schedule.section?.name} - ${schedule.section?.subject?.name} (${schedule?.classroom?.name})`;
                }
              }
            });

            this.dataSource = this.startIntervals.map(
              (hora, index) => {
                const row: any = { hora, hour: `${hora}/${this.endIntervals[index]}` };
                this.days.forEach((day, dayIndex) => {
                  row[day.name] = this.dataSchedule[index][dayIndex];
                });
                console.log(row);
                
                return row;
              }
            );
          })
      );
    }
  }

  showScheduleDetails(schedules: Array<ScheduleItemVM>): void {
    const dialogRef = this.matDialog.open(ScheduleDetailsComponent, {
      data: {
        schedules: schedules,
      },
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
    });
  }

}
