import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}
  
  //This method returns if a route can be activated
  canActivate(): boolean {
      //if user is not authenticated it means that the quiz was not done, so can active /Questions
    if (!this.auth.isAuthenticated()) {
      return true;
    }
    //if user is authenticated, the quiz was already done and can not start the quiz again
    return false;
  }
}