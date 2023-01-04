import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-with-custom-field',
  templateUrl: './form-with-custom-field.component.html',
  styleUrls: ['./form-with-custom-field.component.css']
})
export class FormWithCustomFieldComponent {

  names = {
    firstName: '',
    sureName: ''
  };

  onSubmit(form: NgForm) {
    console.log(this.names);
  }
}
