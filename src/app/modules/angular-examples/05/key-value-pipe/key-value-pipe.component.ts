import { Component, OnInit } from '@angular/core';
import { SomeClass } from 'AEmodel';

@Component({
  selector: 'app-key-value-pipe',
  templateUrl: './key-value-pipe.component.html',
  styleUrls: ['./key-value-pipe.component.css']
})
export class KeyValuePipeComponent implements OnInit {

  someObject: SomeClass = new SomeClass();

  ngOnInit(): void {
    this.setObjectProperties();
  }

  private setObjectProperties() {
    this.someObject.StringProperty = 'string property';
    this.someObject.AnyProperty = 'any property';
    this.someObject.DateProperty = new Date(2000, 12, 24);
  }
}
