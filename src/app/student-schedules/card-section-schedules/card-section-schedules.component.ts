import {
  Component,
  Input,
} from '@angular/core';

import { SectionItemVM } from '../../repositories/sections';

@Component({
  selector: 'app-card-section-schedules',
  templateUrl: './card-section-schedules.component.html',
  styleUrls: ['./card-section-schedules.component.scss']
})
export class CardSectionSchedulesComponent {
  @Input()
  section!: SectionItemVM;
}
