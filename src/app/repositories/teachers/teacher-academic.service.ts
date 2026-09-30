import { Injectable } from '@angular/core';

import {
  CreateTeacherDegreeDto,
  ResponseSubjectHistoryDto,
  ResponseTeacherDegreeDto,
  ResponseTeacherGradeSearchDto,
  TeacherDegreeService,
  TeacherService,
  TranscriptPreviewDto,
  UpdateTeacherDegreeDto,
} from 'dashboard-sdk';
import { Observable } from 'rxjs';

/** Información académica del profesor: historial, títulos, notas y búsqueda por notas. */
@Injectable()
export class TeacherAcademicService {
  constructor(
    private teacherService: TeacherService,
    private teacherDegreeService: TeacherDegreeService,
  ) {}

  /** Secciones impartidas por el profesor, del período más reciente al más antiguo. */
  getSubjectsHistory$(teacherId: number): Observable<Array<ResponseSubjectHistoryDto>> {
    return this.teacherService.teacherControllerFindSubjectsHistory(teacherId);
  }

  /** Títulos del profesor con sus notas. */
  getDegrees$(teacherId: number): Observable<Array<ResponseTeacherDegreeDto>> {
    return this.teacherDegreeService.teacherDegreeControllerFindAllTeacher(teacherId);
  }

  /** Registra un título con sus notas. */
  createDegree$(dto: CreateTeacherDegreeDto): Observable<ResponseTeacherDegreeDto> {
    return this.teacherDegreeService.teacherDegreeControllerCreate(dto);
  }

  /** Actualiza un título; si incluye `grades`, reemplaza todas sus notas. */
  updateDegree$(id: number, dto: UpdateTeacherDegreeDto): Observable<ResponseTeacherDegreeDto> {
    return this.teacherDegreeService.teacherDegreeControllerUpdate(id, dto);
  }

  /** Elimina un título y sus notas. */
  deleteDegree$(id: number): Observable<ResponseTeacherDegreeDto> {
    return this.teacherDegreeService.teacherDegreeControllerRemove(id);
  }

  /** Extrae las notas de un récord (PDF o imagen) sin guardarlas. */
  parseTranscript$(file: File): Observable<TranscriptPreviewDto> {
    return this.teacherDegreeService.teacherDegreeControllerParseTranscript(file);
  }

  /** Profesores con nota en una asignatura (o similar), opcionalmente con nota mínima en %. */
  searchByGrade$(subject: string, minPercent?: number): Observable<Array<ResponseTeacherGradeSearchDto>> {
    return this.teacherDegreeService.teacherDegreeControllerSearch(subject, minPercent);
  }
}
