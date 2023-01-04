import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {

  numbers$: Observable<number>;
  numbers2$: Observable<number[]>;
  countToTake = 6;
  milliseconds = 750;

  ngOnInit(): void {
    this.numbers$ = interval(this.milliseconds);
    this.numbers2$ = this.numbers$.pipe(
      take(this.countToTake),
      toArray()
    );
  }
}
