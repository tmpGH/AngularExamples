import { IAppAuth } from './iapp-auth';

// example: service without "@Injectable" (it's not recommended); nothing can be injected into it
export class FakeAuthService implements IAppAuth {

  isAuthenticated(): Promise<boolean> {
    const promise = new Promise<boolean>(
      (resolve) => {
        setTimeout(() => {
          resolve(window.localStorage['isLoggedIn'] === 'true');
        }, 500);
      }
    );
    return promise;
  }

  logIn(): boolean {
    window.localStorage['isLoggedIn'] = 'true';
    return window.localStorage['isLoggedIn'] === 'true';
  }

  logOut(): boolean {
    window.localStorage['isLoggedIn'] = 'false';
    return window.localStorage['isLoggedIn'] === 'true';;
  }
}
