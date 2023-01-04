import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appWithLetter]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: WithLetterDirective,
      multi: true
    }
  ]
})
export class WithLetterDirective implements Validator {
  // !!! input argument's text must be the same as selector !!!
  @Input('appWithLetter') requiredLetter: string;

  validate(control: AbstractControl): ValidationErrors | null {
    return this.requiredLetter
      ? this.validatorFactory(this.requiredLetter)(control)
      : null;
  }

  private validatorFactory(requiredText: string): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
      const stringValue: string = control.value ? (control.value as string) : '';
      const contain = (stringValue === '' || stringValue.search(requiredText) >= 0);
      // example: text with embedded variables
      return contain ? null : { appWithLetter: `missing [${requiredText}] in [${control.value}]` };
    };
  }
}
