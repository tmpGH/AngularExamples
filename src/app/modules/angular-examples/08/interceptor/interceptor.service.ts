import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private http: HttpClient, private progressService: ProgressBarService) { }

  public SendMessage() {
    this.progressManipulation();
    this.http.get('http://localhost/something').subscribe(
        x => console.log('http resp.: ' + x),
        err => console.log('http resp.: ' + err)
      );
  }

  private progressManipulation() {
    let progress = 10;
    this.progressService.setProgress(progress);
    const obs = of(1, 2, 3).pipe( delay(3000) )
      .subscribe(
        () => {
          progress += 30;
          this.progressService.setProgress(progress);
        }
      );
  }
}
