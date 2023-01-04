import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css'],
// example: view encapsulation disabled (then style is global)
  // encapsulation: ViewEncapsulation.None
})
export class InputOutputComponent {

  propertyForInput = 'property for input';
  receivedEventValue: string = "";

  eventEmited(data: string) {
    this.receivedEventValue = data;
  }
}
