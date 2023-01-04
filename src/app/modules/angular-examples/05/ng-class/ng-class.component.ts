import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {

  styleClasses: {[key: string]: boolean} = {
    'red': true,
    'orange': false,
    'yellow': false,
    'green': false,
    'blue': false,
    'navy': false,
    'violet': false
  };

  setColor(color: string): void {
    // example: getting of objects properties in js
    Object.keys(this.styleClasses).forEach(key => this.styleClasses[key] = false);
    this.styleClasses[color] = true;
  }

  // actually it ought to be: (a: KeyValue<number, string>, b: KeyValue<number, string>) => 0;
  noOrderPipeFn = () => 0;
}
