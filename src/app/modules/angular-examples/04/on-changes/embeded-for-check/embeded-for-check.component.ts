import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { SomeClass } from 'AEmodel';

@Component({
  selector: 'app-embeded-for-check',
  templateUrl: './embeded-for-check.component.html',
  styleUrls: ['./embeded-for-check.component.css']
})
export class EmbededForCheckComponent implements OnChanges {

  @Input() someClass: SomeClass = new SomeClass();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges was fired');
    console.log('property in component: ' + this.someClass);
    console.log('property in property: ' + (this.someClass ? this.someClass.NumberProperty : 'no outer property'));
  }
}
