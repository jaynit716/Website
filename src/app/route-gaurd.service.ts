import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService implements CanActivate{

  constructor(private router:Router) { }

canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){

  if(localStorage.getItem('currentUser')){
    return true;
  }
  this.router.navigate(['/LogIn'],{queryParams:{returnUrl:state.url}})
  return false;
}

}
