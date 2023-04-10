import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SettingsService } from '../repositories/settings/settings.service';

interface optionItem {
  name: string;
  value: string;
  icon: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  title = 'SIGEIT';
  user = {
    img: '',
    name: '',
  };

  optionList: optionItem[] = [
    {
      name: 'Asignaturas',
      value: 'subjects',
      icon: 'class',
    },
    {
      name: 'Aulas',
      value: 'classrooms',
      icon: 'door_sliding',
    },
    {
      name: 'Carreras',
      value: 'careers',
      icon: 'school',
    },
    {
      name: 'Configuraciones',
      value: 'settings',
      icon: 'settings',
    },
    {
      name: 'Departamentos',
      value: 'departments',
      icon: 'apartment',
    },
    {
      name: 'Escuelas',
      value: 'schools',
      icon: 'local_library',
    },
    {
      name: 'Horarios',
      value: 'scheludes',
      icon: 'date_range',
    },
    {
      name: 'Periodos\nAcademicos',
      value: 'periods',
      icon: 'hourglass_empty',
    },
    {
      name: 'Profesores',
      value: 'teachers',
      icon: 'account_box',
    },
    {
      name: 'Secciones',
      value: 'sections',
      icon: 'cast_for_education',
    },
    {
      name: 'Usuarios',
      value: 'users',
      icon: 'person',
    },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private settingsService: SettingsService
  ) {}

  ngOnInit(): void {
    const path = this.activatedRoute.children[0].snapshot.routeConfig?.path;
    if (path) {
      const item = this.optionList.find((option) => option.value === path);
      this.menuOption(item);
    }
  }

  menuOption(option?: optionItem): void {
    if (option && option.name !== 'Configuraciones') {
      this.title = option.name;
      this.router.navigate([`/dashboard/${option.value}`]);
    } else if (!option) {
      this.title = 'SIGEIT';
    } else {
      this.settingsService.open();
    }
  }
}
