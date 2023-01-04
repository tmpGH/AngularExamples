import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsExamplesRoutingModule } from './rxjs-examples-routing.module';
import { MainComponent } from './main/main.component';
import { MapComponent } from './map/map.component';
import { OfComponent } from './of/of.component';
import { FromComponent } from './from/from.component';
import { PipeComponent } from './pipe/pipe.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SchedulersComponent } from './schedulers/schedulers.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    MainComponent,
    MapComponent,
    OfComponent,
    FromComponent,
    PipeComponent,
    UnsubscribeComponent,
    SubjectsComponent,
    SchedulersComponent
  ],
  imports: [
    CommonModule,
    RxjsExamplesRoutingModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    SharedModule
  ]
})
export class RxjsExamplesModule { }
