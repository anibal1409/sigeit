import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import moment from 'moment';
import { Subscription } from 'rxjs';

import { timeValidator } from '../../../common';
import { ClassroomVM } from '../../classrooms/model';
import { DayVM } from '../model';
import { SchedulesService } from '../scheludes.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  sectionId!: number;
  
  @Input()
  scheduleId!: number;

  @Input()
  periodId!: number;

  @Input()
  departmentId!: number;

  @Output()
  closed = new EventEmitter();

  @Output()
  cancel = new EventEmitter();

  form!: FormGroup;

  allClassroomsCtrl = new FormControl(false);
  allClassrooms = false;

  classrooms: Array<ClassroomVM> = [];
  days: Array<DayVM> = [];
  startIntervals: Array<string> = [];
  endIntervals: Array<string> = [];

  private sub$ = new Subscription();

  constructor(
    private schedulesService: SchedulesService,
    private fb: FormBuilder,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['sectionId']?.currentValue) {
      this.loadDataForm();
    } else if (changes['departmentId']?.currentValue) {
      this.loadClassrooms();
    }
  }

  ngOnInit(): void {
    this.createForm();
    this.loadClassrooms();
    this.sub$.add(
      this.schedulesService.getDays$().subscribe(
        (days) => {
          this.days = days;
        }
      )
    );
    this.sub$.add(
      this.schedulesService.findPeriod$(this.periodId).subscribe(
        (period) => {
          const intervals = this.schedulesService.generateTimeIntervalsStartEnd(period.start_time, period.end_time, period.duration, period.interval);
          this.startIntervals = intervals.start;
          this.endIntervals =  intervals.end;
        }
      )
    );
    if (this.scheduleId) {
      this.sub$.add(
        this.schedulesService.findSchedule$(this.sectionId).subscribe(
          (schedule) => {
            if (schedule) {
              this.form.patchValue({
                ...schedule,
              });
            }
          }
        )
      );
    }
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  private loadDataForm(): void {
    this.form?.patchValue({
      sectionId: this.sectionId,
    }, { emitEvent: false });
  }

  private createForm(): void {
    this.form = this.fb.group({
      classroomId: [null, [Validators.required]],
      dayId: [null, [Validators.required]],
      start: [null, [Validators.required]],
      end: [null, [Validators.required, timeValidator()]],
      sectionId: [this.sectionId, [Validators.required]],
    });
    

    this.sub$.add(
      this.allClassroomsCtrl.valueChanges.subscribe(
        (val) => {
          this.allClassrooms = val as boolean;
          this.loadClassrooms();
        }
      )
    );

    this.sub$.add(
      this.form.valueChanges.subscribe(
        (values) => {
          console.log(this.form);
          if (this.form.valid) {
            this.schedulesService.validateClassroomSchedules$(values).subscribe(
              (data) => {
                console.log(data);
                

                const horasEnChoque = data.map((horario: any) => {
                  const start = moment.max(moment(horario.start, 'HH:mm'), moment(values.start, 'HH:mm'));
                  const end = moment.min(moment(horario.end, 'HH:mm'), moment(values.end, 'HH:mm'));
                  return ` ${start.format('HH:mm')} - ${end.format('HH:mm')} (${horario.section?.subject?.name} - ${horario.section?.name})`;
                });

                console.log(`El horario establecido presenta choques con los siguentes horarios:${horasEnChoque}`);
              }
            );
          }
        }
      )
    );
  }

  save(): void {
    const schedule = this.form.value;
    let obs;
    if (this.scheduleId) {
      schedule.id = this.scheduleId;
      obs = this.schedulesService.updateSchedule$(schedule);
    } else {
      obs = this.schedulesService.createSchedule$(schedule);
    }
    
    this.sub$.add(
      obs.subscribe(
        () => {
          this.scheduleId = 0;
          this.form.reset();
          this.loadDataForm();
          this.closed.emit();
        }
      )
    );
  }

  clickCancel(): void {
    this.cancel.emit();
  }

  private loadClassrooms(): void {
    console.log((!this.allClassrooms && this.departmentId) as any);
    
    this.sub$.add(
      this.schedulesService.getClassrooms$((!this.allClassrooms && this.departmentId) as any).subscribe(
        (classrooms) => {
          this.classrooms = classrooms;
        }
      )
    );
  }

  displayFn(item: ClassroomVM | DayVM | any): string {
    return item?.name;
  }

}
