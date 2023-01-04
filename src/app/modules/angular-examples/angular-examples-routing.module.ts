import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { OnChangesComponent } from './04/on-changes/on-changes.component';
import { NgContentComponent } from './04/ng-content/ng-content.component';
import { InputOutputComponent } from './04/input-output/input-output.component';
import { InputBindingComponent } from './05/input-binding/input-binding.component';
import { IndexTrackByComponent } from './05/index-track-by/index-track-by.component';
import { AsyncPipeComponent } from './05/async-pipe/async-pipe.component';
import { TouchedDirtyComponent } from './06/touched-dirty/touched-dirty.component';
import { FormValidatorsComponent } from './06/form-validators/form-validators.component';
import { RouterNavigateComponent } from './07/router-navigate/router-navigate.component';
import { RoutingInfoComponent } from './07/routing-info/routing-info.component';
import { InterceptorComponent } from './08/interceptor/interceptor.component';
import { PropertyAndEventBindingComponent } from './05/property-and-event-binding/property-and-event-binding.component';
import { NgContainerComponent } from './05/ng-container/ng-container.component';
import { KeyValuePipeComponent } from './05/key-value-pipe/key-value-pipe.component';
import { FormsResetComponent } from './06/forms-reset/forms-reset.component';
import { NgClassComponent } from './05/ng-class/ng-class.component';
import { DirectivesComponent } from './05/directives/directives.component';
import { FormWithCustomFieldComponent } from './06/form-with-custom-field/form-with-custom-field.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'InOut',
    pathMatch: 'full'
  }, {
    path: '',
    component: MainComponent,
    children: [ {
        path: 'OnChanges',
        component: OnChangesComponent
      }, {
        path: 'InOut',
        component: InputOutputComponent
      }, {
        path: 'NgContent',
        component: NgContentComponent
      }, {
        path: 'PropertyAndEventBinding',
        component: PropertyAndEventBindingComponent
      }, {
        path: 'InputBinding',
        component: InputBindingComponent
      }, {
        path: 'IndexTrackBy',
        component: IndexTrackByComponent
      }, {
        path: 'AsyncPipe',
        component: AsyncPipeComponent
      }, {
        path: 'NgContainer',
        component: NgContainerComponent
      }, {
        path: 'KeyValuePipe',
        component: KeyValuePipeComponent
      }, {
        path: 'NgClass',
        component: NgClassComponent
      }, {
        path: 'directives',
        component: DirectivesComponent
      }, {
        path: 'FormsReset',
        component: FormsResetComponent
      }, {
        path: 'TouchedDirty',
        component: TouchedDirtyComponent
      }, {
        path: 'FormValidators',
        component: FormValidatorsComponent
      }, {
        path: 'FormCustomField',
        component: FormWithCustomFieldComponent
      }, {
        path: 'RouterNavigate',
        component: RouterNavigateComponent
      }, {
        path: 'RouterNavigate/:id',
        component: RouterNavigateComponent
      }, {
        path: 'RouterNavigate/:id/:color',
        component: RouterNavigateComponent
      }, {
        path: 'RoutingInfo',
        component: RoutingInfoComponent,
      }, {
        path: 'RoutingInfo/:id',
        component: RoutingInfoComponent
      }, {
        path: 'RoutingInfo/:id/:color',
        component: RoutingInfoComponent
      }, {
        path: 'Interceptor',
        component: InterceptorComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AngularExamplesRoutingModule { }
