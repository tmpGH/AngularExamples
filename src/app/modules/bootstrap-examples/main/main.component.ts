import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarLink } from 'src/app/model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  menuItems: NavBarLink[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.CreateMenuItems();
  }

  private CreateMenuItems() {
    this.menuItems = [
      { Label: 'Option 1' },
      { Label: 'Option 2' }
    ];
  }

  onClick(item: NavBarLink) {
    this.router.navigate(['bootstrap', item.RouterLink]);
  }
}
