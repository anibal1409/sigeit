import { FormGroup } from '@angular/forms';
import * as moment from 'moment';


// Valida entre dos fecha, si la segunda fecha  esta antes que la primera fecha

export function ValidateStartEndDate(startName: string, endName: string) {
  return (formGroup: FormGroup) => {
    const format = 'YYYY-MM-DD';
    const start = formGroup.controls[startName];
    const end = formGroup.controls[endName];
    if (start.errors || (end.errors && !end.hasError('MINOR_END_DATE'))) {
      return;
    }

    const startMoment = moment(moment(start.value).format(format), format);
    const endMoment = moment(moment(end.value).format(format), format);

    if (endMoment.isBefore(startMoment)) {
      end.setErrors({ MINOR_END_DATE: true });
    } else {
      end.setErrors(null);
    }
  };
}
