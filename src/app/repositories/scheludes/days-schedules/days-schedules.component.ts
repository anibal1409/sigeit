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
  selector: 'app-days-schedules',
  templateUrl: './days-schedules.component.html',
  styleUrls: ['./days-schedules.component.scss']
})
export class DaysSchedulesComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  periodId!: number;

  @Input()
  departmentId!: number;

  startIntervals: Array<string> = [];
  endIntervals: Array<string> = [];
  classrooms: Array<ClassroomVM> = [];
  days: Array<DayVM> = [];
  dataScheduleByClassroom: any[][] = this.startIntervals.map(() => this.days.map(() => {return {text: ''};}));
  dataSourceByClassroom: any[] = [];
  displayedColumnsByClassroom: string[] = ['hora'];
  
  filteredClassrooms!: Observable<ClassroomVM[]>;
  classroomCtrl = new FormControl();

  
  allClassroomsCtrl = new FormControl(false);
  allClassrooms = false;

  private sub$ = new Subscription();

  constructor(
    private schedulesService: SchedulesService,
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['departmentId']?.currentValue) {
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
  }

  private loadDays(): void {
    this.sub$.add(
      this.schedulesService.getDays$().subscribe((days) => {
        this.days = days;
        this.displayedColumnsByClassroom = ['hora'];
        days.forEach(day => {
          this.displayedColumnsByClassroom.push(day.name);
        });
      })
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

        this.loadSchedulesClassroom();
      })
    );
  }

  private loadSchedulesClassroom(): void {
    const classroomId = this.classroomCtrl.value?.id;
    if (classroomId) {
      this.sub$.add(
        this.schedulesService.getAllClassroomSchedules$(classroomId, this.periodId).subscribe(
          (schedules) => {
            this.dataScheduleByClassroom = this.startIntervals.map(() => this.days.map(() => {return {text: ''};}));
            
            schedules.forEach(schedule => {
              const dayIndex = this.days.findIndex((day) => day.id === schedule.dayId);
              const startIndex = this.startIntervals.indexOf(schedule.start);
              const endIndex = this.endIntervals.indexOf(schedule.end);
              
              for (let i = startIndex; i <= endIndex; i++) {
                if (this.dataScheduleByClassroom[i][dayIndex]?.text) {
                  this.dataScheduleByClassroom[i][dayIndex].text = 'Varias';
                } else {
                  this.dataScheduleByClassroom[i][dayIndex].text = `${schedule.section?.name} - ${schedule.section?.subject?.name}`;
                }
              }
            });

            this.dataSourceByClassroom = this.startIntervals.map((hora, index) => {
              const row: any = { hora };
              this.days.forEach((day, dayIndex) => {
                row[day.name] = this.dataScheduleByClassroom[index][dayIndex];
              });
              return row;
            });
          }
        )
      );
    }
  }

  displayFn(item: ClassroomVM | DayVM | any): string {
    return item?.name;
  }

  private subClassrooms(): void {
    this.sub$.add(
      this.classroomCtrl?.valueChanges.subscribe((classroom) => {
        if (classroom && classroom.id) {
          this.filteredClassrooms = of(this.classrooms);
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

  private _classroomsFilter(name: string): ClassroomVM[] {
    const filterValue = name.toLowerCase();
    return this.classrooms.filter(
      (option) => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  private loadClassrooms(): void {
    this.sub$.add(
      this.schedulesService
        .getClassrooms$((!this.allClassrooms && this.departmentId) as any)
        .subscribe((classrooms) => {
          this.classrooms = classrooms;          
          
          if (this.classrooms?.length) {
            this.filteredClassrooms = this.classroomCtrl.valueChanges.pipe(
              startWith<string | ClassroomVM>(''),
              map((value: any) => {
                if (value !== null) {
                  return typeof value === 'string' ? value : value.name;
                }
                return '';
              }),
              map((name: any) => {
                return name
                  ? this._classroomsFilter(name)
                  : this.classrooms.slice();
              })
            );
          }
        })
    );
  }
}
