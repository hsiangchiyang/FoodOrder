import {ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
// Doneness is required for Steak
export const donenessValidator: ValidatorFn = (control: AbstractControl):
  ValidationErrors | null => {
  const itemType = control.get('itemtype')?.value;
  const doneness = control.get('doneness')?.value;
  return (itemType =='Steak' && doneness == '') ? { donenesschecking: true } : null;
};
