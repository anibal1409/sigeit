import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Subscription } from 'rxjs';

import { DepartmentVM } from '../departments';
import { SubjectVM } from '../subjects/model';
import { SectionsService } from './sections.service';

interface SemesterVM { id: number, name: string };

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit, OnDestroy {

  form!: FormGroup;

  myControl = new FormControl('');
  departments: Array<DepartmentVM> = [];
  subjects: Array<SubjectVM> = [];
  semesters: Array<SemesterVM> = [
    {
      id: -1,
      name: 'Todos',
    },
    {
      id: 1,
      name: '1',
    },
    {
      id: 2,
      name: '2',
    },
    {
      id: 3,
      name: '3',
    },
    {
      id: 4,
      name: '4',
    },
    {
      id: 5,
      name: '5',
    },
    {
      id: 6,
      name: '6',
    },
    {
      id: 7,
      name: '7',
    },
    {
      id: 8,
      name: '8',
    },
    {
      id: 9,
      name: '9',
    },
    {
      id: 10,
      name: '10',
    },
    {
      id: 55,
      name: '55',
    },
    {
      id: 88,
      name: '88',
    },
    {
      id: 99,
      name: '99',
    },
  ];

  private sub$ = new Subscription();

  constructor(
    private sectionsService: SectionsService,
    private fb: FormBuilder
  ) { }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
    this.createForm();
    this.sectionsService.getDepartaments$(1).subscribe(
      (departaments) => {
        this.departments = departaments;
      }
    );
  }

  private createForm(): void {
    this.form = this.fb.group({
      department: [null, [Validators.required]],
      subject: [null, [Validators.required]],
      semester: [-1, [Validators.required]]
    });

    this.sub$.add(
      this.form.get('department')?.valueChanges.subscribe(
        () => {
          this.loadSubjects();
        }
      )
    );
  
    this.sub$.add(
      this.form.get('semester')?.valueChanges.subscribe(
        () => {
          this.loadSubjects();
        }
      )
    );
  }

  private loadSubjects(): void {
    const {department, semester} = this.form.value;
    this.sub$.add(
      this.sectionsService.getSubjects$(+department, +semester).subscribe(
        (subjects) => {
          this.subjects = subjects;
        }
      )
    );
  }

  displayFn(item: DepartmentVM | SubjectVM | SemesterVM): string {
    console.log(item, item?.name);
    
    return item && item?.name ? item.name : '';
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }

}
