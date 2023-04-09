import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, finalize } from 'rxjs';

@Component({
  selector: 'sigeit-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(
    private formBuilder: FormBuilder,

    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    return;
  }
  form!: FormGroup;
  submitDisable = true;
  loading = false;
  hide = true;

  private sub$ = new Subscription();
  ngOnInit(): void {
    this.createForm();
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  getDataFromLogin(): void {
    this.loading = true;
  }
  private createForm(): void {
    this.form = this.formBuilder.group({
      user: [null, [Validators.required, Validators.maxLength(256)]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
        ],
      ],
    });
    this.sub$.add(
      this.form.valueChanges.subscribe(() => {
        this.submitDisable = !this.form.valid;
      })
    );
  }
}
