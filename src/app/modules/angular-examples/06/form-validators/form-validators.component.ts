import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-validators',
  templateUrl: './form-validators.component.html',
  styleUrls: ['./form-validators.component.css']
})
export class FormValidatorsComponent {

  someText: string;
  someOtherText: string;

  logForm(form: NgForm): void {
    form.resetForm();
  }
}
