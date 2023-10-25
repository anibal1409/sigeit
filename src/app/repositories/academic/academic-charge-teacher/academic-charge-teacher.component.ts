import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Subscription } from 'rxjs';

import { StateService } from '../../../common/state';
import { UserStateService } from '../../../common/user-state';
import { PeriodVM } from '../../periods/model';
import {
  DayVM,
  ScheduleDetailsComponent,
  ScheduleItemVM,
} from '../../schedules';
import { SectionItemVM } from '../../sections';
import {
  AcademicChargeTeacherService,
} from './academic-charge-teacher.service';

@Component({
  selector: 'app-academic-charge-teacher',
  templateUrl: './academic-charge-teacher.component.html',
  styleUrls: ['./academic-charge-teacher.component.scss']
})
export class AcademicChargeTeacherComponent implements OnInit, OnDestroy {

  schedules: Array<ScheduleItemVM> = [];
  sections = new Map<number, SectionItemVM>;
  period: PeriodVM = {
    id: 0,
    name: '',
    duration: 0,
    end: '',
    endTime: '',
    start: '',
    startTime: '',
    status: '',
    interval: 0,
    stage: '' as any,
  };
  loading = false;
  hours = 0;
  subjectCounter = 0;
  
  displayedColumnsSections: string[] = ['code', 'name', 'section'];
  displayedColumns: string[] = ['hora'];
  dataSourceSections: Array<SectionItemVM> = [];
  dataSource: any[] = [];
  startIntervals: Array<string> = [];
  endIntervals: Array<string> = [];
  days: Array<DayVM> = [];
  dataSchedule: any[][] = this.startIntervals.map(() =>
    this.days.map(() => {
      return { text: '', schedules: [] };
    })
  );
  showScheudules = false;
  private sub$ = new Subscription();

  constructor(
    private academicChargeTeacherService: AcademicChargeTeacherService,
    private stateService: StateService,
    private userStateService: UserStateService,
    private matDialog: MatDialog,
  ) { }
  
  ngOnInit(): void {
    this.sub$.add(
      this.academicChargeTeacherService.getLoading$().subscribe(
        (loading) => {
          this.loading = loading;
          this.stateService.setLoading(loading);
        }
      )
    );
    this.loadPeriodAcademic();
  }

  private loadPeriodAcademic(): void {
    this.sub$.add(
      this.academicChargeTeacherService.getActivePeriod$().subscribe(
        (period) => {
          this.period = period;
          const intervals = this.academicChargeTeacherService.intervals(
            period.startTime,
            period.endTime,
            period.duration,
            period.interval
          );
          this.startIntervals = intervals.start;
          this.endIntervals = intervals.end;
          this.loadDays();
        }
      )
    );
  
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  private clearSchedule(): void {
    this.dataSchedule = this.startIntervals.map(() =>
      this.days.map(() => {
        return { text: '', schedules: [] };
      })
    );
    this.dataSource = [];
  }
  
  private loadDays(): void {
    this.sub$.add(
      this.academicChargeTeacherService
        .getDays$()
        .subscribe((days) => {
          this.days = days;
          this.displayedColumns = ['hora'];
          days.forEach((day) => {
            this.displayedColumns.push(day.name);
          });
          this.loadSchedules();
        })
    );
  }

  private loadSchedules(): void {
    if (this.period.id) {
      this.sub$.add(
        this.academicChargeTeacherService
          .getSchedules$({
            periodId: this.period.id,
            teacherId: this.userStateService.getTeacherId(),
            status: true,
          })
          .subscribe((schedules) => {
            this.schedules = schedules;
            this.clearSchedule();
            this.sections.clear();

            schedules.forEach((schedule) => {
              const key = schedule.section?.id || 0;
              const value = schedule.section as SectionItemVM;
              this.sections.set(key, value);
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
                  ].text = `${schedule.section?.name} - ${schedule.section?.subject?.name}`;
                }
              }
            });

            this.dataSourceSections = [...this.sections.values()];
            this.subjectCounter = this.dataSourceSections.length;
            this.hours = this.dataSourceSections.reduce((acc, curr) => acc + (curr?.subject?.hours || 0), 0);

            this.dataSource = this.startIntervals.map(
              (hora, index) => {
                const row: any = { hora };
                this.days.forEach((day, dayIndex) => {
                  row[day.name] = this.dataSchedule[index][dayIndex];
                });
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
