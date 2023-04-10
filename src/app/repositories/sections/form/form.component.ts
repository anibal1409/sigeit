import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';

import { TeacherVM } from '../../teachers/model';
import { SectionVM } from '../model';
import { SectionsService } from '../sections.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  subjectId!: number;

  @Input()
  periodId!: number;

  @Input()
  sectionId!: number;

  @Output()
  closed = new EventEmitter();

  @Output()
  cancel = new EventEmitter();

  form!: FormGroup;

  teachers: Array<TeacherVM> = [];

  status: Array<{ id: boolean; name: string }> = [
    {
      id: true,
      name: 'Activo',
    },
    {
      id: false,
      name: 'Inactivo',
    },
  ];

  sections: Array<SectionVM> = [];

  private sub$ = new Subscription();

  constructor(
    private sectionsService: SectionsService,
    private fb: FormBuilder
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['subjectId']?.currentValue ||
      changes['periodId']?.currentValue
    ) {
      this.loadDataForm();
      this.loadLastSection();
    }
  }

  ngOnInit(): void {
    this.createForm();
    this.loadLastSection();
    this.sub$.add(
      this.sectionsService.getTeachers$().subscribe((teachers) => {
        this.teachers = teachers;
      })
    );
    if (this.sectionId) {
      this.sub$.add(
        this.sectionsService
          .findSection$(this.sectionId)
          .subscribe((section) => {
            if (section) {
              this.form.patchValue({
                ...section,
              });
            }
          })
      );
    }
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  private loadDataForm(): void {
    this.form?.patchValue(
      {
        subjectId: this.subjectId,
        periodId: this.periodId,
      },
      { emitEvent: false }
    );
  }

  private loadLastSection(): void {
    if (!this.sectionId) {
      this.sub$.add(
        this.sectionsService
          .getSections$(this.subjectId, this.periodId)
          .subscribe((sections) => {
            this.sections = sections;
            if (sections?.length) {
              const lastSection = sections?.reduce((prev, current) => {
                return +prev.section_name > +current.section_name
                  ? prev
                  : current;
              });
              if (lastSection) {
                this.form.patchValue({
                  section_name: +lastSection.section_name + 1,
                });
              }
            }
          })
      );
    }
  }

  private createForm(): void {
    this.form = this.fb.group({
      subjectId: [this.subjectId, [Validators.required]],
      periodId: [this.periodId, [Validators.required]],
      teacherId: [null, [Validators.required]],
      section_name: [1, [Validators.required]],
      status: [true, [Validators.required]],
      capacity: [0, [Validators.required]],
    });
  }

  save(): void {
    const section = this.form.value;
    let obs;
    section.section_name =
      +section.section_name < 10
        ? `0${+section.section_name}`
        : section.section_name;
    if (this.sectionId) {
      section.id = this.sectionId;
      obs = this.sectionsService.updateSection$(section);
    } else {
      obs = this.sectionsService.createSection$(section);
    }

    this.sub$.add(
      obs.subscribe(() => {
        this.sectionId = 0;
        this.form.reset();
        this.loadDataForm();
        this.closed.emit();
      })
    );
  }

  clickCancel(): void {
    this.cancel.emit();
  }

  displayFn(item: TeacherVM): string {
    if (item) {
      if (item.last_name == '') {
        return item.first_name;
      } else {
        return `${item.last_name},  ${item.first_name}`;
      }
    } else return '';
  }
}
