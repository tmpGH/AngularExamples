import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

import { PromisesExamplesRoutingModule } from './promises-examples-routing.module';
import { MainComponent } from './main/main.component';
import { ThenCatchComponent } from './then-catch/then-catch.component';
import { MethodsComponent } from './methods/methods.component';
import { ConstructorComponent } from './constructor/constructor.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    ThenCatchComponent,
    MethodsComponent,
    ConstructorComponent
  ],
  imports: [
    CommonModule,
    PromisesExamplesRoutingModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatRadioModule,
    SharedModule
  ]
})
export class PromisesExamplesModule { }
