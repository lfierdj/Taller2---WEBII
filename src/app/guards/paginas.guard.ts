import { CanActivateFn } from '@angular/router';

export const paginasGuard: CanActivateFn = (route, state) => {
  
  if( localStorage.getItem('acceso') == 'true' ){
    return true
  }else{
    return false;
  }

};
export const userGuard: CanActivateFn = (route, state) => {
  
  if( localStorage.getItem('acceso') == 'true' ){
    return false
  }else{
    return true;
  }

};

