import { Component } from '@angular/core';
import { SomeClass } from 'AEmodel';

@Component({
  selector: 'app-property-and-event-binding',
  templateUrl: './property-and-event-binding.component.html',
  styleUrls: ['./property-and-event-binding.component.css']
})
export class PropertyAndEventBindingComponent {

  objectForBinding: SomeClass = new SomeClass();
  numberVariable = 1;
  targetValue: string;

  changeEventTarget(event: Event) {
    this.targetValue = (event.target as HTMLInputElement).value;
  }
}
