import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from './shared/services/progress-bar.service';
import { NavBarLink } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  progress: number;
  menuItems: NavBarLink[];

  constructor(private progressService: ProgressBarService) { }

  ngOnInit() {
    this.CreateMenuItems();
    this.progressService.setProgressChanged(val => this.progress = val);
    this.progressService.setProgress(100);
  }

  private CreateMenuItems() {
    this.menuItems = [
        { Label: 'Angular', RouterLink: '/angular' },
        { Label: 'RxJs', RouterLink: '/rxjs' },
        { Label: 'Promises', RouterLink: '/promises' },
        { Label: 'Bootstrap', RouterLink: '/bootstrap' },
        { Label: 'Login page', RouterLink: '/loginPage' }
    ];
  }
}
