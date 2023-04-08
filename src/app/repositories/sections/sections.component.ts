import { Component, OnDestroy, OnInit } from '@angular/core';
import { SectionVM } from './model';
import { HttpClient } from '@angular/common/http';
import { TableDataVM, TableService } from 'src/app/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss'],
})
export class SectionsComponent implements OnInit, OnDestroy {
  constructor(
    private httpClient: HttpClient,
    private tableService: TableService
  ) {}

  sectionsData: TableDataVM<SectionVM> = {
    headers: [
      {
        columnDef: 'section_name',
        header: 'Nombre',
        cell: (element: { [key: string]: string }) =>
          `${element['section_name']}`,
      },
      {
        columnDef: 'id_subject',
        header: 'Asignatura',
        cell: (element: { [key: string]: string }) =>
          `${element['id_subject']}`,
      },
      {
        columnDef: 'id_period',
        header: 'Periodo',
        cell: (element: { [key: string]: string }) => `${element['id_period']}`,
      },
      {
        columnDef: 'id_teacher',
        header: 'Profesor',
        cell: (element: { [key: string]: string }) =>
          `${element['id_teacher']}`,
      },
      {
        columnDef: 'status',
        header: 'Estatus',
        cell: (element: { [key: string]: string }) => `${element['status']}`,
      },
      {
        columnDef: 'capacity',
        header: 'Capacidad',
        cell: (element: { [key: string]: string }) => `${element['capacity']}`,
      },
    ],
    body: [],
    options: [],
  };

  sub$ = new Subscription();

  ngOnInit(): void {
    this.sub$.add(
      this.httpClient
        .get<SectionVM[]>('../../../data/sections.json')
        .subscribe((sections) => {
          this.sectionsData = {
            ...this.sectionsData,
            body: sections || [],
          };
          this.sectionsData.body = this.sectionsData.body.map((data) =>
            data['status'] == true
              ? { ...data, status: 'Activo' }
              : { ...data, status: 'Inactivo' }
          );
          this.tableService.setData(this.sectionsData);
        })
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
