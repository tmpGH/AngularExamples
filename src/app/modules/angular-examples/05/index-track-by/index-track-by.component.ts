import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-track-by',
  templateUrl: './index-track-by.component.html',
  styleUrls: ['./index-track-by.component.css']
})
export class IndexTrackByComponent implements OnInit {

  someItems: Array<string> = new Array<string>();

  ngOnInit(): void {
    this.addItems();
  }

  private addItems() {
    this.someItems = new Array<string>();
    for(let i = 0; i < 5; i++) {
      this.someItems.push('item nr. ' + i);
    }
  }

  // example: arrow functions
  pushItem = () => this.someItems.push('item nr. ' + this.someItems.length);

  popItem = () => this.someItems.pop();

  trackByMethod = (index: any) => index;
}
