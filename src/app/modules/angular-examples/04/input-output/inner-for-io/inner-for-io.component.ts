import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inner-for-io',
  templateUrl: './inner-for-io.component.html',
  styleUrls: ['./inner-for-io.component.css']
})
export class InnerForIOComponent {

  @Input() inputProperty: string = "";
  @Output() outputEvent: EventEmitter<string> = new EventEmitter<string>();

  stringToEmit = 'default string to emit';

  setStringToEmit(event: any) {
    this.stringToEmit = event.target.value;
  }

  buttonClicked() {
    this.outputEvent.emit(this.stringToEmit);
  }

  clearEmission() {
    this.outputEvent.emit('');
  }
}
