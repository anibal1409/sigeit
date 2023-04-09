import {
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Subscription } from 'rxjs';

import { TeacherVM } from '../../teachers/model';
import { SectionVM } from '../model';
import { SectionsService } from '../sections.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy{
  @Input()
  subjectId!: number;

  @Input()
  periodId!: number;

  form!: FormGroup;

  teachers: Array<TeacherVM> = [];

  status: Array<{id: boolean, name: string}> = [
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
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
    
    this.sub$.add(
      this.sectionsService.getSections$(this.subjectId, this.periodId).subscribe(
        (sections) => {
          this.sections = sections;
          const lastSection = sections.reduce((prev, current) => {
            return (+prev.section_name > +current.section_name) ? prev : current;
          });
          if (lastSection) {
            this.form.patchValue({
              section_name: +lastSection.section_name + 1,
            })
          }
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  private createForm(): void {
    this.form = this.fb.group({
      id_subject: [this.subjectId, [Validators.required]],
      id_period: [this.periodId, [Validators.required]],
      id_teacher: [30, [Validators.required]],
      section_name: [1, [Validators.required]],
      status: [true, [Validators.required]],
      capacity: [0, [Validators.required]]
    });
  }

  save(): void {
    const section = this.form.value;
    this.sub$.add(
      this.sectionsService.createSection$(section).subscribe(
        () => {

        }
      )
    );
  }
  

}
