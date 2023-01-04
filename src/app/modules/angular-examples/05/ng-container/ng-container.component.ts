import { Component, OnInit } from '@angular/core';
import { SomeClass } from 'AEmodel';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  showAllItems = true;
  someItems: Array<SomeClass> = new Array<SomeClass>();

  ngOnInit(): void {
    this.addItems();
  }

  toggleShow() {
    this.showAllItems = !this.showAllItems;
  }

  private addItems() {
    for (let i = 0; i < 5; i++) {
      const classToAdd = new SomeClass();
      classToAdd.BooleanProperty = (i % 3 !== 0);
      this.someItems.push(classToAdd);
    }
  }

  pushItem() {
    const classToAdd = new SomeClass();
    classToAdd.BooleanProperty = ((this.someItems.length % 3) !== 0);
    this.someItems.push(classToAdd);
  }

  popItem() {
    this.someItems.pop();
  }
}
