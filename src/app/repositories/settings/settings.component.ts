import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import {
  finalize,
  Subscription,
} from 'rxjs';
import { StateService } from 'src/app/common/state';
import { ToastService } from 'toast';

import { SettingVM } from './model';
import { SettingsService } from './settings.service';

/** La hora de salida debe ser posterior a la de entrada. */
function timeRangeValidator(group: AbstractControl): ValidationErrors | null {
  const { startTime, endTime } = group.value;
  return startTime && endTime && endTime <= startTime ? { timeRange: true } : null;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  form = this.formBuilder.group(
    {
      instituteName: ['', [Validators.required, Validators.maxLength(100)]],
      instituteAbbreviation: ['', [Validators.required, Validators.maxLength(20)]],
      description: [null as string | null, [Validators.maxLength(500)]],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
      duration: [null as number | null, [Validators.required, Validators.min(1), Validators.max(240)]],
      interval: [null as number | null, [Validators.required, Validators.min(0), Validators.max(60)]],
    },
    { validators: timeRangeValidator },
  );
  loading = false;
  loadError = false;

  private sub$ = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private settingsService: SettingsService,
    private stateService: StateService,
    private toastService: ToastService,
  ) {}

  ngOnInit(): void {
    this.load();
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  load(): void {
    this.setLoading(true);
    this.loadError = false;
    this.sub$.add(
      this.settingsService
        .find$()
        .pipe(finalize(() => this.setLoading(false)))
        .subscribe({
          next: (settings) => this.form.reset(settings),
          error: () => (this.loadError = true),
        }),
    );
  }

  save(): void {
    if (this.form.invalid || this.loading) {
      this.form.markAllAsTouched();
      return;
    }
    this.setLoading(true);
    this.sub$.add(
      this.settingsService
        .update$(this.form.getRawValue() as SettingVM)
        .pipe(finalize(() => this.setLoading(false)))
        .subscribe({
          next: (settings) => {
            this.form.reset(settings);
            this.toastService.success('Configuración guardada');
          },
          error: () => this.toastService.error('No se pudo guardar la configuración'),
        }),
    );
  }

  /** Descarta los cambios sin guardar. */
  cancel(): void {
    this.load();
  }

  private setLoading(loading: boolean): void {
    this.loading = loading;
    this.stateService.setLoading(loading);
  }
}
