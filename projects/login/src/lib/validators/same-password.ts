import { AbstractControl, FormGroup } from '@angular/forms';

export function samePassword(fieldName = 'password') {
  return (control: AbstractControl): { [key: string]: unknown } | null => {
    if (!control.parent || !control.parent.controls) {
      return null;
    }

    const password = control.parent.get(fieldName);
    const passwordConfirmation = control.parent.get('confirmPassword');
    if (!password || !passwordConfirmation) {
      return null;
    }
    if (password.value === passwordConfirmation.value) {
      return null;
    }

    return {
      passwordsNotEqual: true,
    };
  };
}

export function checkIfMatchingPasswords(
  passwordKey: string,
  passwordConfirmationKey: string
) {
  return (group: FormGroup) => {
    const passwordInput = group.controls[passwordKey],
      passwordConfirmationInput = group.controls[passwordConfirmationKey];
    if (passwordInput.value !== passwordConfirmationInput.value) {
      return passwordConfirmationInput.setErrors({ notEquivalent: true });
    } else {
      return passwordConfirmationInput.setErrors(null);
    }
  };
}
