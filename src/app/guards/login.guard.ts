import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (next : ActivatedRouteSnapshot) => {
  
  if( localStorage.getItem('acceso') == 'true' ){
    return false
  }else{
    return true;
  }

};

export const registroGuard: CanMatchFn = (route, state) => {

  if( localStorage.getItem('acceso') == 'true' ){
    return false
  }else{
    return true;
  }

};
