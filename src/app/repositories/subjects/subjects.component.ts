import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubjectVM } from './model';
import { HttpClient } from '@angular/common/http';
import { TableDataVM, TableService } from 'src/app/common';
import { Subscription, finalize } from 'rxjs';
import { SubjectsService } from './subjects.service';
import { StateService } from 'src/app/common/state';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements OnInit, OnDestroy {
  constructor(
    private subjectsService: SubjectsService,
    private tableService: TableService,
    private stateService: StateService
  ) {}

  subjectsData: TableDataVM<SubjectVM> = {
    headers: [
      {
        columnDef: 'code',
        header: 'Codigo',
        cell: (element: { [key: string]: string }) => `${element['code']}`,
      },
      {
        columnDef: 'name',
        header: 'Nombre',
        cell: (element: { [key: string]: string }) => `${element['name']}`,
      },
      {
        columnDef: 'credits',
        header: 'Creditos',
        cell: (element: { [key: string]: string }) => `${element['credits']}`,
      },
      {
        columnDef: 'hours',
        header: 'Horas Semanales',
        cell: (element: { [key: string]: string }) => `${element['hours']}`,
      },
      {
        columnDef: 'semester',
        header: 'Semestre',
        cell: (element: { [key: string]: string }) => `${element['semester']}`,
      },
      {
        columnDef: 'type_curriculum',
        header: 'Tipo',
        cell: (element: { [key: string]: string }) =>
          `${element['type_curriculum']}`,
      },
      {
        columnDef: 'status',
        header: 'Estatus',
        cell: (element: { [key: string]: string }) => `${element['status']}`,
      },
    ],
    body: [],
    options: [],
  };

  sub$ = new Subscription();
  loading = false;

  ngOnInit(): void {
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.sub$.add(
      this.subjectsService
        .getSubjects$()
        .pipe(
          finalize(() => {
            this.loading = false;
            setTimeout(() => this.stateService.setLoading(this.loading), 500);
          })
        )
        .subscribe((subjects) => {
          this.subjectsData = {
            ...this.subjectsData,
            body: subjects || [],
          };
          this.tableService.setData(this.subjectsData);
        })
    );
  }
  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
