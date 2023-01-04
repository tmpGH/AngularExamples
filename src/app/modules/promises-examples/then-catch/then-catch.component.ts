import { Component } from '@angular/core';

class MyClass {

  message: string;

  constructor(message: string) { this.message = message; }

  // example: overriding of "toString" method
  toString() {
    return 'MyClass: ' + this.message;
  }
}

@Component({
  selector: 'app-then-catch',
  templateUrl: './then-catch.component.html',
  styleUrls: ['./then-catch.component.css']
})
export class ThenCatchComponent {

  resolveValue: any;
  errorValue: string;
  finalValue: string;
  ifResolved = true;

  changeIfResolved(entry: boolean) {
    this.ifResolved = entry;
  }

  resetResults() {
    this.resolveValue = null;
    this.errorValue = "";
    this.finalValue = "";
  }

  runPromise() {
    const promise = new Promise( (resolve, reject) => {
      if (this.ifResolved) {
        resolve('promise resolved');
      } else {
        reject('promise rejected');
      }
    }).then( result => {
      this.resolveValue = result;
      throw new MyClass('error is thrown');
    }).catch(
      reject => this.errorValue = reject
    ).finally(
      () => this.finalValue = 'promise finalized'
    );
  }
}
