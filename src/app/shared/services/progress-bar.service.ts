import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  progressChanged: (val: number) => void;

  setProgressChanged(fn: (val: number) => void) {
    this.progressChanged = fn;
  }

  setProgress(val: number) {
    if (this.progressChanged) {
      this.progressChanged( val < 0 ? 0 : val > 100 ? 100 : val );
    }
  }
}
