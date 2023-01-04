import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { AuthGuardService } from './auth/auth-guard.service';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';

// example: lazy loading modules
const routes: Routes = [
  {
    path: 'angular',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('./modules/angular-examples/angular-examples.module').then(m => m.AngularExamplesModule)
  }, {
    path: 'rxjs',
    loadChildren: () => import('./modules/rxjs-examples/rxjs-examples.module').then(m => m.RxjsExamplesModule)
  }, {
    path: 'promises',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('./modules/promises-examples/promises-examples.module').then(m => m.PromisesExamplesModule)
  }, {
    path: 'bootstrap',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('./modules/bootstrap-examples/bootstrap-examples.module').then(m => m.BootstrapExamplesModule)
  }, {
// example: routing with passing static data
    path: 'notFound',
    component: ErrorPageComponent, data: { message: 'Page not found !' }
  }, {
    path: '',
    redirectTo: '/angular',
    pathMatch: 'full'
  }, {
    path: '**',
    redirectTo: '/notFound'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SharedModule,
    AuthModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
