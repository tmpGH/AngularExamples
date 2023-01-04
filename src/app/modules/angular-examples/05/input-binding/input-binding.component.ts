import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent {

  inputValue = 'test';

  formsInputChanged() {
    // example: apostrophe inside string (with escape character)
    console.log('form\'s input changed.');
  }

  noFormsInputChanged() {
    console.log('an input outside of the form changed.');
  }

  ngModelChangeMethod(form: NgForm) {
    // example: form controls value in component code
    this.inputValue = form.controls['textField'].value;
    console.log('second form\'s input changed');
    console.log(this.inputValue);
  }
}
