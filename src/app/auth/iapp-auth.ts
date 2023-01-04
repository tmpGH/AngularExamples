// example: dependency injection of interface; APP_AUTH - token for DI
import { InjectionToken } from '@angular/core';

export const APP_AUTH = new  InjectionToken<IAppAuth>('app-auth');

export interface IAppAuth {
    isAuthenticated(): Promise<boolean>;
    logIn(): boolean;
    logOut(): boolean;
}
