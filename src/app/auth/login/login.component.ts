import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import {
  finalize,
  Subscription,
} from 'rxjs';
import { StateService } from 'src/app/common/state';

import { LoginService } from './login.service';

@Component({
  selector: 'sigeit-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  submitDisable = true;
  loading = false;
  hide = true;

  private sub$ = new Subscription();
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private stateService: StateService,
    private loginService: LoginService,
  ) {}

  ngOnInit(): void {
    this.createForm();
    setTimeout(() => this.stateService.setLoading(false), 1000);
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  getDataFromLogin(): void {
    this.loading = true;
  }
  private createForm(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.maxLength(256)]],
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

  submit(): void {
    if (!this.submitDisable) {
      this.stateService.setLoading(true);
      const {email, password} = this.form.value;
      this.loginService.exec(email, password)
      .pipe(
        finalize(() => {
          this.stateService.setLoading(false);
        }
        )
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.form.reset();
          this.router.navigate(['dashboard']);
        }
      );
    }
  }
}
