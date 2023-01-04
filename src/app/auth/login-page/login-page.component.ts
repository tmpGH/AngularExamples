import { Component, OnInit, Inject } from '@angular/core';
import { IAppAuth, APP_AUTH } from '../iapp-auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(@Inject(APP_AUTH) private authService: IAppAuth, private router: Router) { }

  ngOnInit(): void {
    this.authService.isAuthenticated().then( (isAuth: boolean) => {
      this.isLoggedIn = isAuth;
    });
  }

  logIn() {
    this.isLoggedIn = this.authService.logIn();
    this.optionallyRedirect();
  }

  logOut() {
    this.isLoggedIn = this.authService.logOut();
  }

  private optionallyRedirect() {
    if (localStorage['returnRoute']) {
      const route = localStorage['returnRoute'];
      localStorage.removeItem('returnRoute');
      this.router.navigate([route]);
    }
  }
}
