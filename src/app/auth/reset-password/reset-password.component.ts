import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, finalize } from 'rxjs';
import { passwordMatchValidator } from '../../common/password-match-validator.directive';

@Component({
  selector: 'tecnops-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  form!: FormGroup;
  sub$ = new Subscription();
  submitDisable = true;
  loading = false;
  initToken = true;
  hidePassword = true;
  hideConfirm = true;

  ngOnInit(): void {
    this.createForm();
    this.checkToken();
  }
  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  getDataFromResetPassword(): void {
    this.loading = true;
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      newPassword: [
        null,
        [
          Validators.maxLength(16),
          Validators.minLength(8),
          Validators.required,
          passwordMatchValidator,
        ],
      ],
      confirmPassword: [null, [Validators.required, passwordMatchValidator]],
    });
  }

  private checkToken(): void {
    this.sub$.add(
      this.form.valueChanges.pipe().subscribe(() => {
        this.form.controls['newPassword'].updateValueAndValidity({
          onlySelf: true,
          emitEvent: true,
        });
        this.submitDisable = !(
          this.form.controls['newPassword'].valid &&
          this.form.controls['confirmPassword'].valid
        );
      })
    );
  }
}
