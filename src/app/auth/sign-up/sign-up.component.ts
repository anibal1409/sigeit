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
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { ConfirmModalComponent } from '../../common/confirm-modal';
import { StateService } from '../../common/state';
import { CareerItemVM } from '../../repositories/careers';
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  submitDisable = true;
  loading = false;
  hide = true;
  careers: Array<CareerItemVM> = [];

  private sub$ = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private stateService: StateService,
    private signUpService: SignUpService,
    private matDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.sub$.add(
      this.signUpService.getLoading$().subscribe((loading) => {
        this.loading = loading;
        this.stateService.setLoading(loading);
      })
    );

    this.loadCareers();
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
  
  private loadCareers(): void {
    this.sub$.add(
      this.signUpService.getCareers$().subscribe((careers) => {
        this.careers = careers;
      })
    );
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required]],
      idDocument: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      careerId: [null, [Validators.required]],
    });
    this.sub$.add(
      this.form.valueChanges.subscribe(() => {
        this.submitDisable = !this.form.valid;
      })
    );
  }

  submit(): void {
    if (!this.submitDisable) {
      const data = this.form.value;
      this.sub$.add(
        this.signUpService.createStudent(data)
        .subscribe(
          (res) => {
            this.showConfirm(data.email);
          }
        )
      );
    }
  }

  showConfirm(email: string): void {
    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'Usuario creado con éxito',
          body: `Fueron enviado al correo electrónico <strong>email</strong>, su usuario y contraseña.`,
        },
        hiddenActions: true,
      },
      hasBackdrop: true,
      disableClose: true,
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
      this.form.reset();
      this.router.navigate(['auth']);
    });
  }
}
