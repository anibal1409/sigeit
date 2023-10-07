import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
} from '@angular/router';

import { Subscription } from 'rxjs';

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
export class AdminComponent implements OnInit, OnDestroy {
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

  pages = [
    {
      path: '/dashboard/subjects',
      title: 'Asignaturas',
    },
    {
      path: '/dashboard/classrooms',
      title: 'Asignaturas',
    },
    {
      path: '/dashboard/careers',
      title: 'Carreras',
    },
    {
      path: '/dashboard/departments',
      title: 'Departamentos',
    },
    {
      path: '/dashboard/schools',
      title: 'Escuelas',
    },
    {
      path: '/dashboard/scheludes',
      title: 'Horarios',
    },
    {
      path: '/dashboard/scheludes/planned',
      title: 'Horarios planificados',
    },
    {
      path: '/dashboard/scheludes/academic-charge',
      title: 'Horarios/Carga Académica Profesor',
    },
    {
      path: '/dashboard/periods',
      title: 'Periodos Académicos',
    },
    {
      path: '/dashboard/teachers',
      title: 'Profesores',
    },
    {
      path: '/dashboard/sections',
      title: 'Secciones',
    },
    {
      path: '/dashboard/users',
      title: 'Usuarios',
    },
  ];

  sub$ = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private settingsService: SettingsService
  ) { }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
    this.updateTitle(this.router.url);
    this.sub$.add(
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.updateTitle(event.url);
        }
      })
    );
  }

  menuOption(option?: optionItem): void {
    if (option && option.name !== 'Configuraciones') {
      this.router.navigate([`/dashboard/${option.value}`]);
    } else if (!option) {
      this.title = 'SIGEIT';
    } else {
      this.settingsService.open();
    }
  }

  private updateTitle(url: string): void {
    const item = this.pages.find((page) => page.path === url);
    if (item) {
      this.title = item.title;
    } else {
      this.title = 'SIGEIT';
    }
  }
}
