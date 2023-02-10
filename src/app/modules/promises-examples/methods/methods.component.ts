import { Component } from '@angular/core';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';

@Component({
  selector: 'app-errors',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.css']
})
export class MethodsComponent {

  allResults: string;
  allSettledResults: string;
  raceResults: string;
  anyResults: string;

  constructor(private progressBarService: ProgressBarService) { }

  resetResults() {
    this.allResults = this.allSettledResults = this.raceResults = this.anyResults = "";
  }

  runPromisesForAll() {
    const promises = this.getPromises();
    Promise.all(promises).then(values =>
      values.forEach(value =>
        this.allResults = this.allResults ? this.allResults + value + '; ' : value + '; '
    ));
  }

  runPromisesForAllSettled() {
    const promises = this.getPromises();
    Promise.allSettled(promises).then(values =>
      values.forEach(p =>
        this.allSettledResults = this.allSettledResults
          ? this.allSettledResults + p.status + '; '
          : p.status + '; '
      )
    );
  }

  runPromisesForRace() {
    const promises = this.getPromises();
    Promise.race(promises).then( (value) => this.raceResults = value );
  }

  runPromisesForAny() {
    //const promises = this.getPromises();
    //Promise.any(promises).then( (value) => this.anyResults = value );
    this.anyResults = 'there is no "any" method in Promise';
  }

  private getPromises(): Promise<any>[] {
    const promises = [];

    let progress = 0;
    this.progressBarService.setProgress(progress);

    promises.push( new Promise((resolve) => setTimeout(() => {
      progress += 25;
      this.progressBarService.setProgress(progress);
      resolve('promise one');
    }, 1500)));
    promises.push( new Promise((resolve) => setTimeout(() => {
      progress += 30;
      this.progressBarService.setProgress(progress);
      resolve('promise two');
    }, 2000)));
    promises.push( new Promise((resolve) => setTimeout(() => {
      progress += 25;
      this.progressBarService.setProgress(progress);
      resolve('promise three');
    }, 1000)));
    promises.push( new Promise((resolve) => setTimeout(() => {
      progress += 20;
      this.progressBarService.setProgress(progress);
      resolve('promise four');
    }, 500)));

    return promises;
  }
}
