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
  FormGroup,
  Validators,
} from '@angular/forms';

import { Subscription } from 'rxjs';

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

  @Output()
  closed = new EventEmitter();

  @Output()
  cancel = new EventEmitter();

  form!: FormGroup;

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
    }
  }

  ngOnInit(): void {
    this.createForm();
    this.sub$.add(
      this.schedulesService.getClassrooms$().subscribe(
        (classrooms) => {
          this.classrooms = classrooms;
        }
      )
    );
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
      end: [null, [Validators.required]],
      sectionId: [this.sectionId, [Validators.required]],
    });
  }

  save(): void {
    const section = this.form.value;
    let obs;    
    section.section_name = +section.section_name < 10 ? `0${+section.section_name}` : section.section_name;
    if (this.sectionId) {
      section.id = this.sectionId;
      obs = this.schedulesService.updateSchedule$(section);
    } else {
      obs = this.schedulesService.createSchedule$(section);
    }
    
    this.sub$.add(
      obs.subscribe(
        () => {
          this.sectionId = 0;
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

}
