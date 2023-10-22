import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  FormControl,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Subscription } from 'rxjs';

import { ClassroomVM } from '../../classrooms/model';
import {
  DayVM,
  ScheduleItemVM,
} from '../model';
import { ScheduleDetailsComponent } from '../schedule-details';
import { SchedulesService } from '../schedules.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  periodId!: number;

  @Input()
  departmentId!: number;

  startIntervals: Array<string> = [];
  endIntervals: Array<string> = [];
  classrooms: Array<ClassroomVM> = [];
  days: Array<DayVM> = [];
  dataScheduleByClassroom: any[][] = this.startIntervals.map(() =>
    this.days.map(() => {
      return { text: '', schedules: [] };
    })
  );
  dataSourceByClassroom: any[] = [];
  displayedColumnsByClassroom: string[] = ['hora'];

  classroomCtrl = new FormControl('' as any, [Validators.required]);

  allClassroomsCtrl = new FormControl(false);
  allClassrooms = false;

  private sub$ = new Subscription();
  loading = false;

  constructor(
    private schedulesService: SchedulesService,
    private matDialog: MatDialog,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['departmentId']?.currentValue) {
      this.loadClassrooms();
    }
  }
  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
    this.loadDays();
    this.loadIntervals();
    this.subClassrooms();
    this.subChangeSchedules();
    this.loadClassrooms();
  }

  private subChangeSchedules(): void {
    this.sub$.add(
      this.schedulesService
        .getData$()
        .subscribe(() => this.loadSchedulesClassroom())
    );
  }

  private loadDays(): void {
    this.sub$.add(
      this.schedulesService
        .getDays$()
        .subscribe((days) => {
          this.days = days;
          this.displayedColumnsByClassroom = ['hora'];
          days.forEach((day) => {
            this.displayedColumnsByClassroom.push(day.name);
          });
        })
    );
  }

  private loadIntervals(): void {
    this.sub$.add(
      this.schedulesService
        .getActivePeriod$()
        .subscribe((period) => {
          if (period?.id) {
            this.periodId = period.id;
            const intervals = this.schedulesService.generateTimeIntervalsStartEnd(
              period.startTime,
              period.endTime,
              period.duration,
              period.interval
            );
            this.startIntervals = intervals.start;
            this.endIntervals = intervals.end;

            this.loadSchedulesClassroom();
          }
        })
    );
  }

  private loadSchedulesClassroom(): void {
    const classroomId = this.classroomCtrl.value;
    if (classroomId) {
      this.sub$.add(
        this.schedulesService
          .getSchedules$({ classroomId, periodId: this.periodId, })
          .subscribe((schedules) => {
            this.dataScheduleByClassroom = this.startIntervals.map(() =>
              this.days.map(() => {
                return { text: '', schedules: [] };
              })
            );
            

            schedules.forEach((schedule) => {
              const dayIndex = this.days.findIndex(
                (day) => day.id === schedule.day?.id
              );
              const startIndex = this.startIntervals.indexOf(schedule.start);
              const endIndex = this.endIntervals.indexOf(schedule.end);

              for (let i = startIndex; i <= endIndex; i++) {
                
                this.dataScheduleByClassroom[i][dayIndex].schedules.push(schedule);
                if (this.dataScheduleByClassroom[i][dayIndex]?.text) {
                  this.dataScheduleByClassroom[i][dayIndex].text = 'Varias';
                } else {
                  this.dataScheduleByClassroom[i][
                    dayIndex
                  ].text = `${schedule.section?.name} - ${schedule.section?.subject?.name}`;
                }
              }
            });

            this.dataSourceByClassroom = this.startIntervals.map(
              (hora, index) => {
                const row: any = { hora };
                this.days.forEach((day, dayIndex) => {
                  row[day.name] = this.dataScheduleByClassroom[index][dayIndex];
                });
                return row;
              }
            );
          })
      );
    }
  }

  displayFn(item: ClassroomVM | DayVM | any): string {
    return item?.name;
  }

  private subClassrooms(): void {
    this.sub$.add(
      this.classroomCtrl?.valueChanges.subscribe((classroomId) => {
        if (classroomId) {
          this.loadSchedulesClassroom();
        }
      })
    );

    this.sub$.add(
      this.allClassroomsCtrl.valueChanges.subscribe((val) => {
        this.allClassrooms = val as boolean;
        this.loadClassrooms();
      })
    );
  }

  private loadClassrooms(): void {
    this.sub$.add(
      this.schedulesService
        .getClassrooms$({
          departmentId: this.allClassrooms ? undefined : this.departmentId,
        })
        .subscribe((classrooms) => {
          this.classrooms = classrooms;
        })
    );
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
