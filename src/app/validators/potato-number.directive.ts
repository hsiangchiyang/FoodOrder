import {ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
// Validating the input for potato is number
export const potatoValidator: ValidatorFn = (control: AbstractControl):
    ValidationErrors | null => {
      const side = control.get('side')?.value;
      const sideType = side.sideType;
      const option = side.option;
      const maybeNum = Number(option);
      return (sideType =='Baked Potato' && isNaN(maybeNum)) ? { numberChecking: true } : null;
};
