import { Injectable } from '@angular/core';

import moment from 'moment';

@Injectable()
export class IntervalsService {

  exec(
    startTime: string,
    endTime: string,
    duration: number,
    interval: number,
  ): { start: Array<string>; end: Array<string> } {
    const start = [],
      end = [];
    let currentTime = moment(startTime, 'HH:mm');
    const endTimeMoment = moment(endTime, 'HH:mm');

    while (currentTime.isBefore(endTimeMoment)) {
      start.push(currentTime.format('HH:mm'));
      end.push(currentTime.add(duration, 'minutes').format('HH:mm'));
      currentTime.add(interval, 'minutes');
    }

    return { start, end };
  }
}
