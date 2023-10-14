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
  selector: 'app-classrooms-schedules',
  templateUrl: './classrooms-schedules.component.html',
  styleUrls: ['./classrooms-schedules.component.scss']
})
export class ClassroomsSchedulesComponent 
  implements OnInit, OnDestroy, OnChanges
{
  @Input()
  periodId!: number;

  @Input()
  departmentId!: number;


  startIntervals: Array<string> = [];
  endIntervals: Array<string> = [];
  classrooms: Array<ClassroomVM> = [];
  days: Array<DayVM> = [];
  dataScheduleByDay: any[][] = this.startIntervals.map(() =>
    this.classrooms.map(() => {
      return { text: '', schedules: [] };
    })
  );
  dataSourceByDay: any[] = [];
  displayedColumnsByDay: string[] = ['hora'];

  dayCtrl = new FormControl('' as any, [Validators.required]);

  allClassroomsCtrl = new FormControl(false);
  allClassrooms = false;

  private sub$ = new Subscription();
  loading = false;

  constructor(
    private schedulesService: SchedulesService,
    private matDialog: MatDialog,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['departmentId']?.currentValue) {
      this.loadClassrooms();
    }
  }
  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
    this.loadClassrooms();
    this.loadDays();
    this.loadIntervals();
    this.subDay();
    this.subClassrooms();
    this.subChangeSchedules();
  }

  private subChangeSchedules(): void {
    this.sub$.add(
      this.schedulesService
        .getData$()
        .subscribe(() => this.loadScheduleDay())
    );
  }

  private loadDays(): void {
    this.sub$.add(
      this.schedulesService
        .getDays$()
        .subscribe((days) => {
          this.days = days;
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
          }
        })
    );
  }

  private subDay(): void {
    this.sub$.add(
      this.dayCtrl.valueChanges.subscribe(() => {
        this.loadScheduleDay();
      })
    );
  }

  private subClassrooms(): void {
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

          this.displayedColumnsByDay = ['hora'];
          classrooms.forEach((classroom) => {
            this.displayedColumnsByDay.push(classroom.name);
          });

          this.loadScheduleDay();
        })
    );
  }

  private loadScheduleDay(): void {
    const dayId = this.dayCtrl.value;
    if (dayId) {
      this.sub$.add(
        this.schedulesService
          .getSchedules$({dayId, periodId: this.periodId})
          .subscribe((data) => {
            this.dataScheduleByDay = this.startIntervals.map(() =>
              this.classrooms.map(() => {
                return { text: '', schedules: [] };
              })
            );            

            data?.forEach((schedule) => {
              const classroomIndex = this.classrooms.findIndex(
                (classroom) => classroom.id === schedule?.classroom?.id
              );
              const startIndex = this.startIntervals.indexOf(schedule.start);
              const endIndex = this.endIntervals.indexOf(schedule.end);

              for (let i = startIndex; i <= endIndex; i++) {
                this.dataScheduleByDay[i][classroomIndex]?.schedules?.push(schedule);
                if (this.dataScheduleByDay[i][classroomIndex]?.text) {
                  this.dataScheduleByDay[i][classroomIndex].text = 'Varias';
                } else {
                  this.dataScheduleByDay[i][
                    classroomIndex
                  ].text = `${schedule.section?.name} - ${schedule.section?.subject?.name}`;
                }
              }
            });
            
            this.dataSourceByDay = this.startIntervals.map((hora, index) => {
              const row: any = { hora };
              this.classrooms.forEach((classroom, classroomIndex) => {
                row[classroom.name] =
                  this.dataScheduleByDay[index][classroomIndex];
              });
              return row;
            });
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
