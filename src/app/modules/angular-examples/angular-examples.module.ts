import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AngularExamplesRoutingModule } from './angular-examples-routing.module';
import { MainComponent } from './main/main.component';
import { WithLetterDirective } from '../../shared/directives/with-letter/with-letter.directive';
import { OnChangesComponent } from './04/on-changes/on-changes.component';
import { NgContentComponent } from './04/ng-content/ng-content.component';
import { InputOutputComponent } from './04/input-output/input-output.component';
import { InnerForNgContentComponent } from './04/ng-content/inner-for-ng-content/inner-for-ng-content.component';
import { EmbededForCheckComponent } from './04/on-changes/embeded-for-check/embeded-for-check.component';
import { InnerForIOComponent } from './04/input-output/inner-for-io/inner-for-io.component';
import { InputBindingComponent } from './05/input-binding/input-binding.component';
import { IndexTrackByComponent } from './05/index-track-by/index-track-by.component';
import { AsyncPipeComponent } from './05/async-pipe/async-pipe.component';
import { PropertyAndEventBindingComponent } from './05/property-and-event-binding/property-and-event-binding.component';
import { NgContainerComponent } from './05/ng-container/ng-container.component';
import { KeyValuePipeComponent } from './05/key-value-pipe/key-value-pipe.component';
import { NgClassComponent } from './05/ng-class/ng-class.component';
import { DirectivesComponent } from './05/directives/directives.component';
import { TouchedDirtyComponent } from './06/touched-dirty/touched-dirty.component';
import { FormValidatorsComponent } from './06/form-validators/form-validators.component';
import { FormsResetComponent } from './06/forms-reset/forms-reset.component';
import { RouterNavigateComponent } from './07/router-navigate/router-navigate.component';
import { RoutingInfoComponent } from './07/routing-info/routing-info.component';
import { InterceptorComponent } from './08/interceptor/interceptor.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormWithCustomFieldComponent } from './06/form-with-custom-field/form-with-custom-field.component';

@NgModule({
  declarations: [
    MainComponent,
    OnChangesComponent,
    NgContentComponent,
    InputOutputComponent,
    InputBindingComponent,
    IndexTrackByComponent,
    AsyncPipeComponent,
    TouchedDirtyComponent,
    FormValidatorsComponent,
    RouterNavigateComponent,
    RoutingInfoComponent,
    InterceptorComponent,
    InnerForNgContentComponent,
    InnerForIOComponent,
    EmbededForCheckComponent,
    InnerForNgContentComponent,
    PropertyAndEventBindingComponent,
    NgContainerComponent,
    KeyValuePipeComponent,
    FormsResetComponent,
    NgClassComponent,
    WithLetterDirective,
    DirectivesComponent,
    FormWithCustomFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularExamplesRoutingModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    SharedModule
  ]
})
export class AngularExamplesModule { }
