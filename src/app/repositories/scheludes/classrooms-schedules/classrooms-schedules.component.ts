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
  finalize,
  map,
  Observable,
  of,
  startWith,
  Subscription,
} from 'rxjs';
import { StateService } from 'src/app/common/state/state.service';

import { ClassroomVM } from '../../classrooms';
import {
  DayVM,
  ScheduleItemVM,
} from '../model';
import {
  ScheduleDetailsComponent,
} from '../schedule-details/schedule-details.component';
import { SchedulesService } from '../scheludes.service';

@Component({
  selector: 'app-classrooms-schedules',
  templateUrl: './classrooms-schedules.component.html',
  styleUrls: ['./classrooms-schedules.component.scss'],
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

  filteredDays!: Observable<DayVM[]>;
  dayCtrl = new FormControl('' as any, [Validators.required]);

  allClassroomsCtrl = new FormControl(false);
  allClassrooms = false;

  private sub$ = new Subscription();
  loading = false;

  constructor(
    private schedulesService: SchedulesService,
    private stateService: StateService,
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
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.sub$.add(
      this.schedulesService
        .changeSchedules$()
        .pipe(
          finalize(() => {
            this.loading = false;
            setTimeout(() => this.stateService.setLoading(this.loading), 100);
          })
        )
        .subscribe(() => this.loadScheduleDay())
    );
  }

  private loadDays(): void {
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.sub$.add(
      this.schedulesService
        .getDays$()
        .pipe(
          finalize(() => {
            this.loading = false;
            setTimeout(() => this.stateService.setLoading(this.loading), 100);
          })
        )
        .subscribe((days) => {
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
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.sub$.add(
      this.schedulesService
        .findPeriod$(this.periodId)
        .pipe(
          finalize(() => {
            this.loading = false;
            setTimeout(() => this.stateService.setLoading(this.loading), 100);
          })
        )
        .subscribe((period) => {
          const intervals = this.schedulesService.generateTimeIntervalsStartEnd(
            period.startTime,
            period.endTime,
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
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.sub$.add(
      this.schedulesService
        .getClassrooms$((!this.allClassrooms && this.departmentId) as any)
        .pipe(
          finalize(() => {
            this.loading = false;
            setTimeout(() => this.stateService.setLoading(this.loading), 100);
          })
        )
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
    this.loading = true;
    this.stateService.setLoading(this.loading);
    const dayId = this.dayCtrl.value?.id;
    if (dayId) {
      this.sub$.add(
        this.schedulesService
          .getAllDaySchedules$(dayId, this.periodId)
          .pipe(
            finalize(() => {
              this.loading = false;
              setTimeout(() => this.stateService.setLoading(this.loading), 100);
            })
          )
          .subscribe((schedules) => {
            this.dataScheduleByDay = this.startIntervals.map(() =>
              this.classrooms.map(() => {
                return { text: '', schedules: [] };
              })
            );

            schedules.forEach((schedule) => {
              const classroomIndex = this.classrooms.findIndex(
                (classroom) => classroom.id === schedule.classroomId
              );
              const startIndex = this.startIntervals.indexOf(schedule.start);
              const endIndex = this.endIntervals.indexOf(schedule.end);

              for (let i = startIndex; i <= endIndex; i++) {
                this.dataScheduleByDay[i][classroomIndex].schedules.push(schedule);
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
