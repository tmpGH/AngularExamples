import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MapComponent } from './map/map.component';
import { OfComponent } from './of/of.component';
import { FromComponent } from './from/from.component';
import { PipeComponent } from './pipe/pipe.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { AuthGuardService } from 'src/app/auth/auth-guard.service';
import { SchedulersComponent } from './schedulers/schedulers.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivateChild: [ AuthGuardService ],
    children: [ {
//      path: 'observers',
//        component: ObserversComponent
//      }, {
        path: 'unsubscribe',
        component: UnsubscribeComponent
      }, {
        path: 'subjects',
        component: SubjectsComponent
      }, {
        path: 'schedulers',
        component: SchedulersComponent
      }, {
        path: 'pipe',
        component: PipeComponent
      }, {
        path: 'map',
        component: MapComponent
      }, {
        path: 'of',
        component: OfComponent
      }, {
        path: 'from',
        component: FromComponent
      }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class RxjsExamplesRoutingModule { }
