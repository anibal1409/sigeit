import { AbstractControl } from '@angular/forms';

import moment from 'moment';

export function timeValidator(startName = 'start') {
	return (endCtrl: AbstractControl): { [key: string]: unknown } | null => {
    const format = 'HH:mm';
		if (!endCtrl.parent || !endCtrl.parent.controls) {
			return null;
		}

		const startCtrl = endCtrl.parent.get(startName);
		if (!startCtrl || !startCtrl?.value || !endCtrl.value) {
			return null;
		}

    const startDate = moment(startCtrl.value, format);
    const endDate = moment(endCtrl.value, format);
    
    if (startDate.isAfter(endDate)) {
      return { 'invalidTimeRange': true };
    }
    return null;
	};
}
