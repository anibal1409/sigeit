import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { isEqual } from 'lodash';
import { Subscription } from 'rxjs';

import {
  PeriodVM,
  STAGE_PERIODS,
  STAGE_PERIODS_VALUE,
  StagePeriod,
} from '../model';
import { PeriodsService } from '../periods.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  @Input()
  id!: number;

  @Output()
  closed = new EventEmitter();

  form!: FormGroup;
  sub$ = new Subscription();
  loading = false;
  submitDisabled = true;

  oldFormValue: PeriodVM = {
    name: '',
    description: '',
    id: 0,
    status: true,
    duration: 45,
    end: '',
    start: '',
    endTime: '',
    interval: 5,
    startTime: '07:00',
    stage: StagePeriod.toStart,
  };
  
  status = [
    { name: 'Activo', value: true },
    { name: 'Inactivo', value: false, },
  ];
  stages = STAGE_PERIODS;
  STAGE_PERIODS_VALUE = STAGE_PERIODS_VALUE;
  intervalsStart = [];
  intervalsEnd = [];

  constructor(
    private periodsService: PeriodsService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: PeriodVM,
  ) { }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
    this.sub$.add(
      this.periodsService.getLoading$().subscribe((loading) => {
        this.loading = loading;
      })
    );
    this.createForm();
    this.loadData();
  }


  loadIntervals(): void {
    const {duration, interval} = this.form.value;
    const intervals = this.periodsService.generateIntervals('07:00', '23:00', duration, interval);
    this.intervalsStart = intervals.start;
    this.intervalsEnd = intervals.end;
  }

  loadData(): void {
    if (this.data?.id) {
      this.id = this.data?.id;
      this.sub$.add(
        this.periodsService
          .find$({ id: this.id })
          .subscribe((entity) => {
            if (entity) {
              this.oldFormValue = entity;
              this.form.patchValue(
                {
                  ...entity,
                },
                {
                  emitEvent: false,
                }
              );
            }
          })
      );
    }
  }

  clickClosed(): void {
    this.closed.emit();
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.maxLength(200)]],
      id: [0],
      status: [true, [Validators.required]],
      start:  [null, [Validators.required]],
      end: [null, [Validators.required]],
      startTime:  ['07:00', [Validators.required]],
      endTime: [null, [Validators.required]],
      duration:  [45, [Validators.required]],
      interval: [5, [Validators.required]],
      stage: [{value: StagePeriod.toStart, disabled: !this.data?.id}, [Validators.required]],
      copyPrevious: [true],
    });

    this.sub$.add(
      this.form.valueChanges.subscribe(() => {
        this.submitDisabled =
          isEqual(this.oldFormValue, this.form.getRawValue()) ||
          this.form.invalid;
      })
    );

    this.sub$.add(
        this.form.get('duration')?.valueChanges.subscribe(
        () => {
          this.loadIntervals();
        }
      )
    );

    this.sub$.add(
      this.form.get('interval')?.valueChanges.subscribe(
      () => {
        this.loadIntervals();
      }
    )
  );

    this.loadIntervals();
  }

  clickSave(): void {
    if (this.id) {
      this.update();
    } else {
      this.create();
    }
  }

  private create(): void {
    if (!this.submitDisabled) {
      this.sub$.add(
        this.periodsService
          .create({
            ...this.form.getRawValue(),
          })
          .subscribe(
            () => {
              this.form.reset();
              this.clickClosed();
            }
          )
      );
    }
  }

  private update(): void {
    if (!this.submitDisabled) {
      this.sub$.add(
        this.periodsService
          .update({
            ...this.form.getRawValue(),
            id: this.id,
          })
          .subscribe(
            () => {
              this.form.reset();
              this.clickClosed();
            }
          )
      );
    }
  }

}