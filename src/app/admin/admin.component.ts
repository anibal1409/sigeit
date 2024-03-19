import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  NavigationEnd,
  Router,
} from '@angular/router';

import { Subscription } from 'rxjs';

import {
  UserStateService,
  UserStateVM,
} from '../common/user-state';
import { AdminService } from './admin.service';
import { MENU } from './data';
import { optionMenu } from './models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit, OnDestroy {
  title = 'SIGEIT';

  optionList: Array<optionMenu> = [];

  pages = [
    {
      path: '/dashboard/subjects',
      title: 'Asignaturas',
    },
    {
      path: '/dashboard/classrooms',
      title: 'Aulas',
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
      title: 'Planificación Académica',
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
    {
      path: '/dashboard/formats',
      title: 'Formatos',
    },
    {
      path: '/dashboard/inscription',
      title: 'Inscripción',
    },
    {
      path: '/dashboard/schedules-students',
      title: 'Horarios',
    },
    {
      path: '/dashboard/schedules-students/finished',
      title: 'Inscripción finalizada',
    },
    {
      path: '/dashboard/schedules-students/schedule',
      title: 'Horario inscrito',
    },
    {
      path: '/dashboard/academic-charge',
      title: 'Carga Académica',
    },
    {
      path: '/dashboard/profile',
      title: 'Mi Perfil',
    },
  ];

  sub$ = new Subscription();
  user!: UserStateVM;

  optionProfile: optionMenu = {
    icon: '',
    name: 'Mi Perfil',
    permissions: [],
    value: 'profile'
  };

  constructor(
    private router: Router,
    private userStateService: UserStateService,
    private adminService: AdminService,
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
    this.user = this.userStateService.getUser() as any;
    this.sub$.add(
      this.userStateService.getUser$().subscribe((user) => {
        if (user) {
          this.user = user;
        }
      }
      )
    );
    const role = this.userStateService.getRole();
    if (role) {
      this.optionList = MENU.filter((item) => (item.permissions.includes(role as any)))
      .sort((a, b) => {
        let sort = 0;
        if (a.name > b.name) {
          sort = 1;
        } else if (a.name < b.name) {
          sort = -1;
        }
        
        return sort;
      }
      );
      this.optionList.push({
        name: 'Salir',
        icon: 'logout',
        permissions: [],
        value: 'logout',
      });
    }
    
  }

  menuOption(option?: optionMenu): void {
    if (option && option.name === 'Salir') {
      this.logout();
    } else if (option) {
      this.router.navigate([`/dashboard/${option.value}`]);
    } else if (!option) {
      this.title = 'SIGEIT';
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

  logout(): void {
    this.adminService.logout();
  }
}
