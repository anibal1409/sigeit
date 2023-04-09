import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SettingsService } from './settings.service';

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

  constructor(
    private formBuilder: FormBuilder,
    private settingsService: SettingsService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.sub$.add(
      this.settingsService.findSettings$().subscribe((settings) => {
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
// "institute_name": "Universidad De Oriente",
// "institute_abbreviation": "UDO",
// "institute_logo": "",
// "description": "",
// "start_time": "07:00",
// "end_time": "16:05",
// "interval": 5,
// "duration": 45
