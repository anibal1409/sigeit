import { Component } from '@angular/core';

@Component({
  selector: 'app-days-schedules',
  templateUrl: './days-schedules.component.html',
  styleUrls: ['./days-schedules.component.scss']
})
export class DaysSchedulesComponent {
  horarios = [
    { horaInicio: '07:00', horaFin: '09:25', dia: 'Lunes', aula: 'A1', asignatura: 'Matemáticas' },
    { horaInicio: '10:20', horaFin: '11:55', dia: 'Lunes', aula: 'A2', asignatura: 'Física' },
    { horaInicio: '07:00', horaFin: '10:15', dia: 'Miércoles', aula: 'A3', asignatura: 'Programación' },
    { horaInicio: '10:20', horaFin: '11:55', dia: 'Miércoles', aula: 'A4', asignatura: 'Base de datos' },
    { horaInicio: '14:25', horaFin: '16:05', dia: 'Viernes', aula: 'A5', asignatura: 'Inglés' },
  ];
  dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  horas = ['07:00', '07:50', '8:40', '09:30', '10:20', '11:05', '12:00', '12:45', '13:35', '14:25', '16:10', '16:50'];
  matriz: string[][] = this.horas.map(() => this.dias.map(() => ''));
  constructor() {
    this.horarios.forEach(horario => {
      const diaIndex = this.dias.indexOf(horario.dia);
      const horaInicioIndex = this.horas.indexOf(horario.horaInicio);
      const horaFinIndex = this.horas.indexOf(horario.horaFin);
      
      for (let i = horaInicioIndex; i < horaFinIndex; i++) {
        this.matriz[i][diaIndex] = `${horario.asignatura}\n${horario.aula}`;
      }
    });
    this.horarios.forEach(horario => {
      const fila = this.dias.indexOf(horario.dia);
      const colInicio = this.horas.indexOf(horario.horaInicio);
      const colFin = this.horas.indexOf(horario.horaFin);
    
      for (let i = colInicio; i < colFin; i++) {
        this.matriz[i][fila] = `${horario.asignatura}\n${horario.aula}`;
      }
    });
  }

}
