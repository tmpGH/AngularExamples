import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapExamplesRoutingModule } from './bootstrap-examples-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    BootstrapExamplesRoutingModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    SharedModule
  ]
})
export class BootstrapExamplesModule { }
