import { Injectable, Inject } from '@angular/core'
import { AuthService } from './auth/auth.service'
import {Observable} from "rxjs";
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'


@Injectable()
export class AuthGuard implements CanActivate{
 

  constructor(@Inject(AuthService) private auth: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
    return this.auth.isLoggedIn
  }

}