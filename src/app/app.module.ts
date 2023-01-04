import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { APP_AUTH } from './auth/iapp-auth';
import { FakeAuthService } from './auth/fake-auth.service';
import { ExemplaryInterceptor } from './shared/exemplary-interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
//    BrowserModule,          // required by Angular, exported by BrowserAnimationsModule
    BrowserAnimationsModule,  // contain reference to BrowserModule
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    MatProgressBarModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ExemplaryInterceptor, multi: true },
    // TODO: useClass or the others options ?
    { provide: APP_AUTH, useClass: FakeAuthService }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
