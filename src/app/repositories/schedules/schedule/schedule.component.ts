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
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { Subscription } from 'rxjs';

import { ClassroomVM } from '../../classrooms/model';
import {
  readUrlNumber,
  writeUrlQuery,
} from '../../../common/url-query';
import {
  DayVM,
  ScheduleItemVM,
} from '../model';
import { SchedulesService } from '../schedules.service';
import { ScheduleDisplayService } from '../shared/schedule-display.service';

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
  dataScheduleByClassroom: any[][] = [];
  dataSourceByClassroom: any[] = [];
  displayedColumnsByClassroom: string[] = ['hora'];

  classroomCtrl = new FormControl('' as any, [Validators.required]);

  allClassroomsCtrl = new FormControl(false);
  allClassrooms = false;

  private sub$ = new Subscription();
  loading = false;

  constructor(
    private schedulesService: SchedulesService,
    private scheduleDisplayService: ScheduleDisplayService,
    private router: Router,
    private route: ActivatedRoute,
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
    this.classroomCtrl.setValue(readUrlNumber(this.route, 'classroomId') || '', { emitEvent: false });
    this.allClassrooms = this.route.snapshot.queryParamMap.get('allClassrooms') === 'true';
    this.allClassroomsCtrl.setValue(this.allClassrooms, { emitEvent: false });
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
            this.dataScheduleByClassroom = this.scheduleDisplayService.initializeScheduleMatrix(
              this.startIntervals,
              this.days
            );

            this.scheduleDisplayService.processSchedulesIntoMatrix(
              schedules,
              this.dataScheduleByClassroom,
              this.startIntervals,
              this.endIntervals,
              this.days
            );

            this.dataSourceByClassroom = this.scheduleDisplayService.createDataSource(
              this.startIntervals,
              this.endIntervals,
              this.days,
              this.dataScheduleByClassroom
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
        writeUrlQuery(this.router, this.route, { classroomId: classroomId || null });
        if (classroomId) {
          this.loadSchedulesClassroom();
        }
      })
    );

    this.sub$.add(
      this.allClassroomsCtrl.valueChanges.subscribe((val) => {
        this.allClassrooms = val as boolean;
        writeUrlQuery(this.router, this.route, { allClassrooms: this.allClassrooms });
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
          // Aula restaurada desde la URL: carga su itinerario una vez hay aulas.
          if (this.classroomCtrl.value && !this.dataSourceByClassroom.length) {
            this.loadSchedulesClassroom();
          }
        })
    );
  }

  showScheduleDetails(schedules: Array<ScheduleItemVM>): void {
    this.scheduleDisplayService.showScheduleDetails(schedules);
  }
}
