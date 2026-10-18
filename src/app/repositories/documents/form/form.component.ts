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
  ActivatedRoute,
  Router,
} from '@angular/router';

import {
  DepartmentService,
  ResponseDepartmentDto,
} from 'dashboard-sdk';
import { Subscription } from 'rxjs';
import { ToastService } from 'toast';

import { UserStateService } from '../../../common';
import { DocumentsFileService } from '../documents.service';
import {
  DEFAULT_TEMPLATES,
  DOCUMENT_VARIABLES,
  DocumentVM,
  fillTemplate,
  parseTemplateLine,
  REQUIRED_BODY_VARIABLES,
  TemplateSegment,
  TYPE_DOCUMENT_LABELS,
  TypeDocument,
} from '../model';

interface PreviewLine {
  segments: Array<TemplateSegment>;
  table: boolean;
  /** Línea de copias (C.c.): a la izquierda y en letra pequeña */
  cc: boolean;
}

/** El cuerpo debe incluir las variables obligatorias de su tipo (p. ej. {tabla}). */
function requiredVariablesValidator(group: AbstractControl): ValidationErrors | null {
  const { type, body } = group.value;
  const missing = (REQUIRED_BODY_VARIABLES[type as TypeDocument] || [])
    .filter((key) => !(body || '').includes(`{${key}}`));
  return missing.length ? { missingVariables: missing.map((key) => `{${key}}`).join(', ') } : null;
}

/** Crear o editar un formato de documento con texto libre y variables. */
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  readonly types = Object.values(TypeDocument).map((value) => ({ value, name: TYPE_DOCUMENT_LABELS[value] }));

  id = 0;
  departmentIdUser = 0;
  departments: Array<ResponseDepartmentDto> = [];
  loading = false;

  form = this.formBuilder.group(
    {
      name: ['', [Validators.required, Validators.maxLength(100)]],
      type: [TypeDocument.AcademicCharge, [Validators.required]],
      departmentId: [null as number | null, [Validators.required]],
      status: [true],
      body: [DEFAULT_TEMPLATES[TypeDocument.AcademicCharge].body, [Validators.required, Validators.maxLength(5000)]],
      signature: [DEFAULT_TEMPLATES[TypeDocument.AcademicCharge].signature, [Validators.required, Validators.maxLength(1000)]],
    },
    { validators: requiredVariablesValidator },
  );

  private sub$ = new Subscription();

  constructor(
    private documentService: DocumentsFileService,
    private departmentService: DepartmentService,
    private userStateService: UserStateService,
    private toastService: ToastService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  get variables() {
    return DOCUMENT_VARIABLES[this.form.controls.type.value as TypeDocument] || [];
  }

  get previewBody(): Array<PreviewLine> {
    return this.preview(this.form.controls.body.value || '');
  }

  get previewSignature(): Array<PreviewLine> {
    return this.preview(this.form.controls.signature.value || '');
  }

  ngOnInit(): void {
    this.departmentIdUser = this.userStateService.getDepartmentId() || 0;
    this.sub$.add(this.documentService.getLoading$().subscribe((loading) => (this.loading = loading)));
    this.sub$.add(
      this.departmentService
        .departmentControllerFindAll(this.userStateService.getSchoolId(), true)
        .subscribe((departments) => (this.departments = departments)),
    );
    if (this.departmentIdUser) {
      // El jefe de departamento solo gestiona los formatos del suyo.
      this.form.controls.departmentId.setValue(this.departmentIdUser);
      this.form.controls.departmentId.disable();
    }
    this.id = +(this.route.snapshot.queryParamMap.get('id') || 0);
    if (this.id) {
      this.sub$.add(
        this.documentService.find$({ id: this.id }).subscribe((entity) => {
          if (entity) {
            this.form.reset(entity);
          }
        }),
      );
    }
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  /** Inserta {variable} donde está el cursor del campo indicado. */
  insertVariable(textarea: HTMLTextAreaElement, field: 'body' | 'signature', key: string): void {
    const control = this.form.controls[field];
    const value = control.value || '';
    const start = textarea.selectionStart ?? value.length;
    const end = textarea.selectionEnd ?? value.length;
    const token = `{${key}}`;
    control.setValue(value.slice(0, start) + token + value.slice(end));
    control.markAsDirty();
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + token.length, start + token.length);
    });
  }

  /** Vuelve al texto por defecto del tipo elegido. */
  restoreDefault(): void {
    const template = DEFAULT_TEMPLATES[this.form.controls.type.value as TypeDocument];
    this.form.patchValue(template);
    this.form.markAsDirty();
  }

  cancel(): void {
    this.router.navigate(['dashboard/formats']);
  }

  save(): void {
    if (this.form.invalid || this.loading) {
      this.form.markAllAsTouched();
      return;
    }
    const document = { ...this.form.getRawValue(), id: this.id } as DocumentVM;
    const request$ = this.id ? this.documentService.update(document) : this.documentService.create(document);
    this.sub$.add(
      request$.subscribe({
        next: () => {
          this.toastService.success('Formato guardado');
          this.cancel();
        },
        error: (error) => this.toastService.error(errorMessage(error)),
      }),
    );
  }

  private preview(text: string): Array<PreviewLine> {
    const values = Object.fromEntries(this.variables.map((variable) => [variable.key, variable.example]));
    return text.split('\n').map((line) => ({
      table: line.trim() === '{tabla}',
      cc: line.trim().startsWith('C.c.'),
      segments: parseTemplateLine(fillTemplate(line, values)),
    }));
  }
}

function errorMessage(error: any): string {
  if (error?.status === 403) {
    return 'No tiene permiso para gestionar formatos de este departamento';
  }
  if (error?.error?.message === 'Document already exists.') {
    return 'Ya existe un formato con ese nombre en el departamento';
  }
  return 'No se pudo guardar el formato';
}
