import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
  
    const loggedIn = localStorage.getItem('loggedInStatus');
    console.log(loggedIn);
    

    if (loggedIn !== null && JSON.parse(loggedIn) === true) {
      return true; // Accès à la route
    } else {
      return this.router.createUrlTree(['/redirection']); // Redirige l'utilisateur vers la page de redirection
    }
  }
}
