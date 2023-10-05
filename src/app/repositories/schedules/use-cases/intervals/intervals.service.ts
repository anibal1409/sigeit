import { Injectable } from '@angular/core';

import moment from 'moment';

import {
  Intervals,
  IntervalsSelect,
} from '../../model';

@Injectable()
export class IntervalsService {

  exec(
    startTime: string,
    endTime: string,
    duration: number,
    interval: number,
  ): Intervals {
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

  execSelect(
    startTime: string,
    endTime: string,
    duration: number,
    interval: number,
  ): IntervalsSelect {
    const start = [],
      end = [];
    let currentTime = moment(startTime, 'HH:mm');
    const endTimeMoment = moment(endTime, 'HH:mm');

    while (currentTime.isBefore(endTimeMoment)) {
      let s, e;
      s = currentTime.format('HH:mm');
      start.push({
        id: s,
        name: s,
      });
      e = currentTime.add(duration, 'minutes').format('HH:mm');
      end.push({
        id: e,
        name: e,
      });
      currentTime.add(interval, 'minutes');
    }

    return { start, end };
  }
}
