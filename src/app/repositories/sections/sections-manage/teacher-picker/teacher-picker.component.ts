import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { ResponseSectionTeacherDto } from 'dashboard-sdk';

const UNASSIGNED = 0;

/** Selector de profesor de una sección con historial, notas y carga de cada candidato. */
@Component({
  selector: 'app-teacher-picker',
  templateUrl: './teacher-picker.component.html',
  styleUrls: ['./teacher-picker.component.scss'],
})
export class TeacherPickerComponent implements OnChanges {
  /** Candidatos ordenados por relevancia; undefined mientras cargan. */
  @Input() candidates?: Array<ResponseSectionTeacherDto>;
  /** Horas actuales de cada profesor en el período. */
  @Input() hours = new Map<number, number>();
  /** Horas que suma la sección a su profesor (0 si la sección está inactiva). */
  @Input() sectionHours = 0;
  @Input() teacherId: number | null = null;
  /** Nombre del profesor actual, por si no está entre los candidatos (otro departamento). */
  @Input() teacherName = '';
  @Input() disabled = false;

  @Output() picked = new EventEmitter<number | null>();
  /** Se emite al enfocar el campo, para cargar los candidatos bajo demanda. */
  @Output() opened = new EventEmitter<void>();

  readonly unassigned = UNASSIGNED;
  text = '';
  filtered: Array<ResponseSectionTeacherDto> = [];

  ngOnChanges(): void {
    this.reset();
  }

  filter(text: string): void {
    this.text = text;
    const words = normalize(text).split(' ').filter(Boolean);
    this.filtered = (this.candidates || []).filter((item) => {
      const name = normalize(fullName(item));
      return words.every((word) => name.includes(word));
    });
  }

  select(event: MatAutocompleteSelectedEvent): void {
    const id = event.option.value === UNASSIGNED ? null : +event.option.value;
    if (id !== this.teacherId) {
      this.picked.emit(id);
    }
    this.reset();
  }

  /** Muestra de nuevo el profesor asignado y todos los candidatos. */
  reset(): void {
    const current = this.candidates?.find((item) => item.teacher.id === this.teacherId);
    this.text = current ? fullName(current) : this.teacherName;
    this.filtered = this.candidates || [];
  }

  /** Texto que el autocompletado escribe en el campo al elegir una opción. */
  display = (id: number): string => {
    const item = this.candidates?.find((candidate) => candidate.teacher.id === id);
    return item ? fullName(item) : '';
  };

  name(item: ResponseSectionTeacherDto): string {
    return fullName(item);
  }

  currentHours(item: ResponseSectionTeacherDto): number {
    return this.hours.get(item.teacher.id) ?? item.hours;
  }

  /** Horas que tendría el profesor si se le asigna esta sección. */
  projectedHours(item: ResponseSectionTeacherDto): number {
    const hours = this.currentHours(item);
    return item.teacher.id === this.teacherId ? hours : hours + this.sectionHours;
  }
}

function fullName(item: ResponseSectionTeacherDto): string {
  return `${item.teacher.lastName}, ${item.teacher.firstName}`;
}

function normalize(text: string): string {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}
