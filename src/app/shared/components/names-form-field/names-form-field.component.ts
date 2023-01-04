import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-names-form-field',
  templateUrl: './names-form-field.component.html',
  styleUrls: ['./names-form-field.component.css'],
  providers: [
// TODO: where to put provider
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NamesFormFieldComponent),
      multi: true
    }
  ]
})
export class NamesFormFieldComponent implements ControlValueAccessor {

  // property for "ngModel"
  firstAndSureName = {
    firstName: '',
    sureName: ''
  };

  // property and methods for the ControlValueAccessor interface
  disabled: boolean;
  onChange = (_: any) => {};
  onTouched = (_: any) => {};

  //#region ControlValueAccessor elements
  writeValue(obj: any): void {
    if (obj) {
      this.firstAndSureName.firstName = obj?.firstName;
      this.firstAndSureName.sureName = obj?.sureName;
      this.onChange(this.firstAndSureName);
    }
  }

  registerOnChange(fn: any) { this.onChange = fn; }

  registerOnTouched(fn: any) { this.onTouched = fn; }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.onChange(this.disabled);
  }
  //#endregion ControlValueAccessor elements

  firstNameChanged(event: Event) {
    this.firstAndSureName.firstName = (event.target as HTMLInputElement).value;
    this.onChange(this.firstAndSureName);
  }

  sureNameChanged(event: Event) {
    this.firstAndSureName.sureName = (event.target as HTMLInputElement).value;
    this.onChange(this.firstAndSureName);
  }

  setDefaultNames() {
    this.firstAndSureName.firstName = 'Dżon';
    this.firstAndSureName.sureName = 'Kovalsky';
    this.onChange(this.firstAndSureName);
  }
}
