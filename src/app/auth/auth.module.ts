import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [ LoginPageComponent ],
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    RouterModule.forChild([{ path: 'loginPage', component: LoginPageComponent }])
  ],
  exports: [
    LoginPageComponent,
    RouterModule
  ]
})
export class AuthModule { }
