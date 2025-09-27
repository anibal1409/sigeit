import {
  Component,
  EventEmitter,
  Inject,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ScheduleItemVM } from '../model';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.scss']
})
export class ScheduleDetailsComponent implements OnInit {
  @Output()
  closed = new EventEmitter();

  schedules: Array<ScheduleItemVM> = [];

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) private data: any,
  ) { }

  ngOnInit(): void {
    if (this.data?.schedules) {
      this.schedules = this.data.schedules;
    }
  }

  getGroupedSchedules(): any[] {
    const grouped = new Map();

    this.schedules.forEach(schedule => {
      const sectionId = schedule.section?.id;
      if (!grouped.has(sectionId)) {
        grouped.set(sectionId, {
          section: schedule.section,
          schedules: []
        });
      }
      grouped.get(sectionId).schedules.push(schedule);
    });

    return Array.from(grouped.values());
  }

  clickClosed(): void {
    this.closed.emit();
  }
}
