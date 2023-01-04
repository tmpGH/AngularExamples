import { Component, OnInit, DoCheck } from '@angular/core';
import { SomeClass } from 'AEmodel';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent implements OnInit, DoCheck {

  stringProperty = '0';
  someClass: SomeClass = new SomeClass();
  classForOutput: SomeClass = new SomeClass();

  constructor() { }

  ngOnInit(): void {
    this.someClass.NumberProperty = 100;
  }

  ngDoCheck(): void {
    console.log('DoCheck was fired');
    console.log('string property: ' + this.stringProperty);
    console.log('property in object: ' + this.someClass.NumberProperty);
  }

  changeStringProperty() {
    // example: number to string conversion
    let myNumber = Number(this.stringProperty);
    this.stringProperty = (++myNumber).toString();
  }

  changeComponentOfObject() {
    this.someClass.NumberProperty = -this.someClass.NumberProperty;
  }

  changeObjectProperty() {
    if(this.classForOutput == null)
      this.classForOutput = new SomeClass();
  }
}
