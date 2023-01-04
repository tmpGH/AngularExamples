import { Injectable, Inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, UrlSegment } from '@angular/router';
import { CanLoad, CanActivate, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { IAppAuth, APP_AUTH } from './iapp-auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {

  constructor( @Inject(APP_AUTH) private authService: IAppAuth, private router: Router ) { }

  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    const path: string = segments.length > 0 ? segments[0].path : "";
    return this.authService.isAuthenticated().then( (isAuth: boolean) => this.optionallyRedirect(isAuth, path) );
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then( (isAuth: boolean) => this.optionallyRedirect(isAuth, state.url) );
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(childRoute, state);
  }

  private optionallyRedirect(isAuthenticated: boolean, currentUrl: string) {
    if (isAuthenticated) {
      return true;
    }

    if (currentUrl) {
      localStorage['returnRoute'] = currentUrl;
    }
    this.router.navigate(['/loginPage']);
    return false;
  }
}
