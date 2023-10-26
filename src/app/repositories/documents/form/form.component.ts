import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { isEqual } from 'lodash';
import { Subscription } from 'rxjs';

import { DocumentsFileService } from '../documents.service';
import {
  DocumentVM,
  TypeDocument,
} from '../model';

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

  oldFormValue: DocumentVM = {
    name: '',
    description: '',
    id: 0,
    status: true,
    departmentId: 0,
    type: TypeDocument.AcademicCharge,
  };
  
  status = [
    { name: 'Activo', value: true },
    { name: 'Inactivo', value: false, },
  ];

  constructor(
    private documentService: DocumentsFileService,
    private formBuilder: FormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: DocumentVM,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
    this.sub$.add(
      this.activatedRoute.queryParams.subscribe((params: any) => {
        console.log(params?.id > 0);
        if (params?.id && !isNaN(params?.id)) {
          this.id = +params.id;
          this.loadData();
        }
      })
    );
    this.sub$.add(
      this.documentService.getLoading$().subscribe((loading) => {
        this.loading = loading;
      })
    );
    this.createForm();
    this.loadData();
  }

  loadData(): void {
    if (this.data?.id || this.id > 0) {
      this.id = this.data?.id || this.id;
      this.sub$.add(
        this.documentService
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
      description: [null, [Validators.required]],
      id: [0],
      status: [true, [Validators.required]],
      departmentId:  [1, [Validators.required]],
      type: [TypeDocument.AcademicCharge, [Validators.required]],
    });

    this.sub$.add(
      this.form.valueChanges.subscribe(() => {
        console.log(this.form.value);
        this.submitDisabled =
          isEqual(this.oldFormValue, this.form.getRawValue()) ||
          this.form.invalid;
      })
    );
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
        this.documentService
          .create({
            ...this.form.value,
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
        this.documentService
          .update({
            ...this.form.value,
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
