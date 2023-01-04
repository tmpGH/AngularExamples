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

  ngOnInit() {
    this.CreateMenuItems();
  }

  private CreateMenuItems() {
    this.menuItems = [
      {
        Label: 'Part 04 - component',
        Items: [
          { Label: '@Input , @Output',    RouterLink: 'InOut' },
          { Label: 'OnChanges , DoCheck', RouterLink: 'OnChanges' },
          { Label: '<ng-content>',        RouterLink: 'NgContent' }
        ]
      },
      {
        Label: 'Part 05 - view',
        Items: [
          { Label: 'one way bindings', RouterLink: 'PropertyAndEventBinding' },
          { Label: '(input) binding',  RouterLink: 'InputBinding' },
          { Label: 'index , track-by', RouterLink: 'IndexTrackBy' },
          { Label: 'async pipe',       RouterLink: 'AsyncPipe' },
          { Label: '<ng-container>',   RouterLink: 'NgContainer' },
          { Label: 'KeyValue pipe',    RouterLink: 'KeyValuePipe' },
          { Label: 'ngClass',          RouterLink: 'NgClass' },
          { Label: 'directives',       RouterLink: 'directives' }
        ]
      },
      {
        Label: 'Part 06 - form',
        Items: [
          { Label: 'forms reset',      RouterLink: 'FormsReset' },
          { Label: 'touched vs dirty', RouterLink: 'TouchedDirty' },
          { Label: 'forms validators', RouterLink: 'FormValidators' },
          { Label: 'forms custom field', RouterLink: 'FormCustomField' }
        ]
      },
      {
        Label: 'Part 07 - routing',
        Items: [
          { Label: 'routing informations', RouterLink: 'RoutingInfo' },
          { Label: 'router.navigate(...)', RouterLink: 'RouterNavigate' }
        ]
      },
      {
        Label: 'Part 08 - http',
        Items: [
          { Label: 'HTTP interceptor', RouterLink: 'Interceptor' }
        ]
      }
    ];
  }

  onClick(item: NavBarLink) {
    this.router.navigate(['angular', item.RouterLink]);
  }
}
