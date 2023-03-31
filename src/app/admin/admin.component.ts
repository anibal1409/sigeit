import { Component } from '@angular/core';

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
export class AdminComponent {
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
      value: 'config',
      icon: 'settings',
    },
    {
      name: 'Dedicaciones',
      value: 'dedications',
      icon: 'history_edu',
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

  menuOption(option: optionItem): void {
    console.log(option.name);
    if (option.name !== 'Configuraciones') {
      this.title = option.name;
    }
  }
}
