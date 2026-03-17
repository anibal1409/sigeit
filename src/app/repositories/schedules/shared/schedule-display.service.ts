import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ScheduleDetailsComponent } from '../schedule-details';
import { ScheduleItemVM } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleDisplayService {

  constructor(private matDialog: MatDialog) { }

  /**
   * Muestra los detalles de un horario en un modal
   * @param schedules Array de horarios a mostrar
   */
  showScheduleDetails(schedules: Array<ScheduleItemVM>): void {
    const dialogRef = this.matDialog.open(ScheduleDetailsComponent, {
      data: {
        schedules: schedules,
      },
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
    });
  }

  /**
   * Inicializa una matriz de horarios vacía
   * @param startIntervals Array de intervalos de inicio
   * @param days Array de días
   * @returns Matriz inicializada con objetos vacíos
   */
  initializeScheduleMatrix(startIntervals: string[], days: any[]): any[][] {
    return startIntervals.map(() =>
      days.map(() => {
        return { text: '', schedules: [] };
      })
    );
  }

  /**
   * Procesa horarios y los coloca en la matriz de horarios
   * @param schedules Array de horarios a procesar
   * @param dataSchedule Matriz de horarios donde colocar los datos
   * @param startIntervals Array de intervalos de inicio
   * @param endIntervals Array de intervalos de fin
   * @param days Array de días
   */
  processSchedulesIntoMatrix(
    schedules: ScheduleItemVM[],
    dataSchedule: any[][],
    startIntervals: string[],
    endIntervals: string[],
    days: any[]
  ): void {
    schedules.forEach((schedule) => {
      if (!schedule || !schedule.start || !schedule.end) {
        return;
      }

      const dayIndex = days.findIndex((day) => day.id === schedule.day?.id);
      const startIndex = startIntervals.indexOf(schedule.start);
      const endIndex = endIntervals.indexOf(schedule.end);

      if (startIndex === -1 || endIndex === -1 || dayIndex === -1) {
        return;
      }

      // Colocar el schedule en todas las celdas del rango
      for (let i = startIndex; i <= endIndex; i++) {
        if (i >= 0 && i < dataSchedule.length && dayIndex >= 0) {
          dataSchedule[i][dayIndex].schedules.push(schedule);

          if (dataSchedule[i][dayIndex]?.text) {
            dataSchedule[i][dayIndex].text = 'Varias';
          } else {
            dataSchedule[i][dayIndex].text = `${schedule.section?.name} - ${schedule.section?.subject?.name}`;
          }
        }
      }
    });
  }

  /**
   * Procesa horarios y los coloca en la matriz por aula (vista "Por día").
   * Las columnas de la matriz corresponden a aulas.
   * @param schedules Array de horarios a procesar
   * @param dataSchedule Matriz de horarios donde colocar los datos
   * @param startIntervals Array de intervalos de inicio
   * @param endIntervals Array de intervalos de fin
   * @param classrooms Array de aulas (columnas de la matriz)
   */
  processSchedulesIntoMatrixByClassroom(
    schedules: ScheduleItemVM[],
    dataSchedule: any[][],
    startIntervals: string[],
    endIntervals: string[],
    classrooms: any[]
  ): void {
    schedules.forEach((schedule) => {
      if (!schedule || !schedule.start || !schedule.end) {
        return;
      }

      const classroomIndex = classrooms.findIndex(
        (classroom) => classroom.id === schedule.classroom?.id
      );
      const startIndex = startIntervals.indexOf(schedule.start);
      const endIndex = endIntervals.indexOf(schedule.end);

      if (startIndex === -1 || endIndex === -1 || classroomIndex === -1) {
        return;
      }

      for (let i = startIndex; i <= endIndex; i++) {
        if (i >= 0 && i < dataSchedule.length && classroomIndex >= 0) {
          dataSchedule[i][classroomIndex].schedules.push(schedule);

          if (dataSchedule[i][classroomIndex]?.text) {
            dataSchedule[i][classroomIndex].text = 'Varias';
          } else {
            dataSchedule[i][classroomIndex].text = `${schedule.section?.name} - ${schedule.section?.subject?.name}`;
          }
        }
      }
    });
  }

  /**
   * Crea un dataSource para la tabla de horarios
   * @param startIntervals Array de intervalos de inicio
   * @param endIntervals Array de intervalos de fin
   * @param days Array de días
   * @param dataSchedule Matriz de horarios procesada
   * @returns Array de objetos para el dataSource
   */
  createDataSource(
    startIntervals: string[],
    endIntervals: string[],
    days: any[],
    dataSchedule: any[][]
  ): any[] {
    return startIntervals.map((hora, index) => {
      const row: any = { hora };
      days.forEach((day, dayIndex) => {
        row[day.name] = dataSchedule[index][dayIndex];
      });
      return row;
    });
  }
}
