import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarLink } from 'src/app/model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.css' ]
})
export class MainComponent implements OnInit {

  menuItems: NavBarLink[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.CreateMenuItems();
  }

  private CreateMenuItems() {
    this.menuItems = [
      {
        Label: 'Observables',
        Items: [
          { Label: 'unsubscribe', RouterLink: 'unsubscribe' },
          { Label: 'subjects',    RouterLink: 'subjects' },
          { Label: 'observers',   RouterLink: 'observers' },
        ]
      } , {
        Label: 'Operators',
        Items: [
          { Label: 'pipe',  RouterLink: 'pipe' },
          { Label: 'map',   RouterLink: 'map' },
          { Label: 'of',    RouterLink: 'of'  },
          { Label: 'from',  RouterLink: 'from' }
        ]
      } , {
         Label: 'Schedulers', RouterLink: 'schedulers'
      }
    ];
  }

  onClick(item: NavBarLink) {
    this.router.navigate(['rxjs', item.RouterLink]);
  }
}
