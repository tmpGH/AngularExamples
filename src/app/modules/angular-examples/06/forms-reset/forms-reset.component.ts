import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-reset',
  templateUrl: './forms-reset.component.html',
  styleUrls: ['./forms-reset.component.css']
})
export class FormsResetComponent implements OnInit {

  someText: string;
  someDate: string;
  someRange: number;

  @ViewChild('myForm') inputForm: NgForm;

  ngOnInit(): void {
    this.resetValues();
  }

  clearForm() {
    this.inputForm.resetForm();
  }

  resetValues() {
    this.someText = 'some text';
    this.someDate = '2019-05-29';
    this.someRange = 3;
  }
}
