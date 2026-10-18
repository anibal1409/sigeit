import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import { ResponseDepartmentSettingDto } from 'dashboard-sdk';

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

  /** Una fila editable por departamento con su correlativo de oficios. */
  officeRows: Array<{ setting: ResponseDepartmentSettingDto; form: FormGroup }> = [];
  readonly currentYear = new Date().getFullYear();

  private sub$ = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private settingsService: SettingsService,
    private stateService: StateService,
    private toastService: ToastService,
  ) {}

  ngOnInit(): void {
    this.load();
    this.loadOfficeSettings();
  }

  private loadOfficeSettings(): void {
    this.sub$.add(
      this.settingsService.findDepartments$().subscribe({
        next: (settings) => (this.officeRows = settings.map((setting) => ({ setting, form: this.officeForm(setting) }))),
        error: () => this.toastService.error('No se pudieron cargar los correlativos de oficio'),
      }),
    );
  }

  private officeForm(setting: ResponseDepartmentSettingDto): FormGroup {
    return this.formBuilder.group({
      officePrefix: [setting.officePrefix, [Validators.required, Validators.pattern(/^[A-Z0-9]{1,10}$/)]],
      officeLastNumber: [setting.officeLastNumber, [Validators.required, Validators.min(0)]],
      askOfficeNumberOnBulk: [setting.askOfficeNumberOnBulk],
    });
  }

  /** Código de ejemplo del siguiente oficio, p. ej. DIS-250/2026. */
  nextCode(form: FormGroup): string {
    const { officePrefix, officeLastNumber } = form.value;
    return `${officePrefix || '—'}-${String((+officeLastNumber || 0) + 1).padStart(3, '0')}/${this.currentYear}`;
  }

  saveOffice(row: { setting: ResponseDepartmentSettingDto; form: FormGroup }): void {
    if (row.form.invalid) {
      row.form.markAllAsTouched();
      return;
    }
    const { officePrefix, officeLastNumber, askOfficeNumberOnBulk } = row.form.value;
    this.sub$.add(
      this.settingsService
        .updateDepartment$(row.setting.departmentId, {
          officePrefix,
          officeLastNumber: +officeLastNumber,
          askOfficeNumberOnBulk,
        })
        .subscribe({
          next: (setting) => {
            row.setting = setting;
            row.form.reset({
              officePrefix: setting.officePrefix,
              officeLastNumber: setting.officeLastNumber,
              askOfficeNumberOnBulk: setting.askOfficeNumberOnBulk,
            });
            this.toastService.success(`Correlativo de ${setting.departmentName} guardado`);
          },
          error: (error) => this.toastService.error(
            error?.status === 403
              ? 'No tiene permiso para modificar este departamento'
              : 'No se pudo guardar el correlativo',
          ),
        }),
    );
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
