import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ThenCatchComponent } from './then-catch/then-catch.component';
import { MethodsComponent } from './methods/methods.component';
import { ConstructorComponent } from './constructor/constructor.component';

const routes: Routes = [ {
    path: '',
    component: MainComponent,
    children: [ {
        path: 'constructor',
        component: ConstructorComponent
      }, {
        path: 'thenCatch',
        component: ThenCatchComponent
      }, {
        path: 'methods',
        component: MethodsComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PromisesExamplesRoutingModule { }
