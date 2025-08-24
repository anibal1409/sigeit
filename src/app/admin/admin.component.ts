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
import { GlobalPeriodService } from '../common/global-period';
import { PeriodItemVM } from '../repositories/periods/model';
import { ActivePeriodService } from '../repositories/periods/use-cases';
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
  activePeriod: PeriodItemVM | null = null;
  periodDisplayText: string = '';

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
    private globalPeriodService: GlobalPeriodService,
    private activePeriodService: ActivePeriodService,
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
      })
    );
    
    // Inicializar el período académico
    this.initializePeriod();
    
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

  private initializePeriod(): void {
    this.globalPeriodService.setLoading(true);
    
    // Usar el caso de uso existente para obtener el período activo
    this.sub$.add(
      this.activePeriodService.exec().subscribe({
        next: (period) => {
          if (period?.id) {
            this.globalPeriodService.updatePeriodFromService(period);
            this.activePeriod = period;
            this.updatePeriodDisplayText();
          }
          this.globalPeriodService.setLoading(false);
        },
        error: (error) => {
          console.error('Error al cargar el período activo:', error);
          this.globalPeriodService.setLoading(false);
        }
      })
    );
    
    // Suscribirse al período académico activo del servicio global
    this.sub$.add(
      this.globalPeriodService.getActivePeriod$().subscribe((period) => {
        this.activePeriod = period;
        this.updatePeriodDisplayText();
      })
    );
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

  private updatePeriodDisplayText(): void {
    if (this.activePeriod) {
      this.periodDisplayText = this.activePeriod.name;
    } else {
      this.periodDisplayText = '';
    }
  }

  logout(): void {
    this.adminService.logout();
  }
}
