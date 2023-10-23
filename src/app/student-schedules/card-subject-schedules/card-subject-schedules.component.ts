import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { SectionItemVM } from '../../repositories/sections';

@Component({
  selector: 'app-card-subject-schedules',
  templateUrl: './card-subject-schedules.component.html',
  styleUrls: ['./card-subject-schedules.component.scss']
})
export class CardSubjectSchedulesComponent {
  @Input()
  section!: SectionItemVM;

  @Input()
  inscription = false;

  @Output()
  deleteSection = new EventEmitter<SectionItemVM>();

  @Output()
  validate = new EventEmitter<SectionItemVM>();

  @Output()
  canceled = new EventEmitter<SectionItemVM>();

  deleteSectionClick(): void {
    this.deleteSection.emit(this.section);
  }

  validateClick(): void {
    this.validate.emit(this.section);
  }

  canceledClick(): void {
    this.canceled.emit(this.section);
  }

}
