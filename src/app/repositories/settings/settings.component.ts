import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, finalize } from 'rxjs';
import { SettingsService } from './settings.service';
import { StateService } from 'src/app/common/state';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  @Output()
  closed = new EventEmitter();
  form!: FormGroup;
  sub$ = new Subscription();
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private settingsService: SettingsService,
    private stateService: StateService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.createForm();
    this.sub$.add(
      this.settingsService
        .findSettings$()
        .pipe(
          finalize(() => {
            this.loading = false;
            setTimeout(() => this.stateService.setLoading(this.loading), 500);
          })
        )
        .subscribe((settings) => {
          this.form.patchValue(
            {
              ...settings,
            },
            { emitEvent: false }
          );
        })
    );
  }

  ngOnDestroy(): void {
    this.closeModal();
    this.sub$.unsubscribe();
  }
  closeModal(value = false): void {
    if (!value) {
      this.closed.emit();
    } else {
      // this.adminSettingServices.setConfigData(this.form.value).subscribe(() => {
      // });
      this.closed.emit();
    }
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      institute_name: [null, [Validators.required, Validators.maxLength(30)]],
      institute_abbreviation: [null, [Validators.required]],
      description: [null],
      start_time: [null, [Validators.required]],
      end_time: [null, [Validators.required]],
      interval: [null, [Validators.required]],
      duration: [null, [Validators.required]],
    });
  }
}
