import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import {
  map,
  Observable,
  of,
  startWith,
  Subscription,
} from 'rxjs';

import { ClassroomVM } from '../../classrooms';
import { DayVM } from '../model';
import { SchedulesService } from '../scheludes.service';

@Component({
  selector: 'app-classrooms-schedules',
  templateUrl: './classrooms-schedules.component.html',
  styleUrls: ['./classrooms-schedules.component.scss']
})
export class ClassroomsSchedulesComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  periodId!: number;

  @Input()
  departmentId!: number;

  startIntervals: Array<string> = [];
  endIntervals: Array<string> = [];
  classrooms: Array<ClassroomVM> = [];
  days: Array<DayVM> = [];
  dataScheduleByDay: any[][] = this.startIntervals.map(() => this.classrooms.map(() => { return { text: '' }; }));
  dataSourceByDay: any[] = [];
  displayedColumnsByDay: string[] = ['hora'];

  filteredDays!: Observable<DayVM[]>;
  dayCtrl = new FormControl();


  allClassroomsCtrl = new FormControl(false);
  allClassrooms = false;

  private sub$ = new Subscription();

  constructor(
    private schedulesService: SchedulesService,
  ) {
  }

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
    this.subChangeSchedules()
  }

  private subChangeSchedules(): void {
    this.sub$.add(
      this.schedulesService.changeSchedules$().subscribe(
        () => this.loadScheduleDay()
      )
    );
  }

  private loadDays(): void {
    this.sub$.add(
      this.schedulesService.getDays$().subscribe((days) => {
        this.days = days;
        if (this.days) {
          this.filteredDays = this.dayCtrl.valueChanges.pipe(
            startWith<string | DayVM>(''),
            map((value: any) => {
              if (value !== null) {
                return typeof value === 'string' ? value : value.name;
              }
              return '';
            }),
            map((name: any) => {
              return name ? this._daysFilter(name) : this.days.slice();
            })
          );
        }
      })
    );
  }

  private _daysFilter(name: string): DayVM[] {
    const filterValue = name.toLowerCase();
    return this.days.filter(
      (option) => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  private loadIntervals(): void {
    this.sub$.add(
      this.schedulesService.findPeriod$(this.periodId).subscribe((period) => {
        const intervals = this.schedulesService.generateTimeIntervalsStartEnd(
          period.start_time,
          period.end_time,
          period.duration,
          period.interval
        );
        this.startIntervals = intervals.start;
        this.endIntervals = intervals.end;
      })
    );
  }

  displayFn(item: ClassroomVM | DayVM | any): string {
    return item?.name;
  }

  private subDay(): void {
    this.sub$.add(
      this.dayCtrl.valueChanges.subscribe((day) => {
        if (day && day.id) {
          this.filteredDays = of(this.days);
        }
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
        .getClassrooms$((!this.allClassrooms && this.departmentId) as any)
        .subscribe((classrooms) => {
          this.classrooms = classrooms;

          this.displayedColumnsByDay = ['hora'];
          classrooms.forEach(classroom => {
            this.displayedColumnsByDay.push(classroom.name);
          });

          this.loadScheduleDay();
        })
    );
  }

  private loadScheduleDay(): void {
    const dayId = this.dayCtrl.value?.id;
    if (dayId) {
      this.sub$.add(
        this.schedulesService.getAllDaySchedules$(dayId, this.periodId).subscribe(
          (schedules) => {
            console.log(schedules);

            this.dataScheduleByDay = this.startIntervals.map(() => this.classrooms.map(() => { return { text: '' }; }));
            console.log(this.dataScheduleByDay);

            schedules.forEach(schedule => {
              const classroomIndex = this.classrooms.findIndex((classroom) => classroom.id === schedule.classroomId);
              const startIndex = this.startIntervals.indexOf(schedule.start);
              const endIndex = this.endIntervals.indexOf(schedule.end);

              console.log(schedule, classroomIndex, startIndex, endIndex);

              for (let i = startIndex; i <= endIndex; i++) {
                if (this.dataScheduleByDay[i][classroomIndex]?.text) {
                  this.dataScheduleByDay[i][classroomIndex].text = 'Varias';
                } else {
                  this.dataScheduleByDay[i][classroomIndex].text = `${schedule.section?.name} - ${schedule.section?.subject?.name}`;
                }
              }
            });

            console.log(this.dataScheduleByDay);
            this.dataSourceByDay = this.startIntervals.map((hora, index) => {
              const row: any = { hora };
              this.classrooms.forEach((classroom, classroomIndex) => {
                row[classroom.name] = this.dataScheduleByDay[index][classroomIndex];
              });
              return row;
            });
          }
        )
      );
    }
  }
}
