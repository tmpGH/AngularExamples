import { Component } from '@angular/core';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.css']
})
export class ConstructorComponent {

  resolveValue: any;
  errorValue: string = "";
  ifResolved = true;

  changeIfResolved(entry: boolean) {
    this.ifResolved = entry;
  }

  resetResults() {
    this.resolveValue = null;
    this.errorValue = "";
  }

  runPromise() {
    const promise = new Promise(
      (resolve, reject) => {
        if (this.ifResolved) {
          resolve('promise resolved');
        } else {
          reject('promise rejected');
        }
      }
    ).then(
      result => this.resolveValue = result,
      reject => this.errorValue = reject
    );
  }
}
