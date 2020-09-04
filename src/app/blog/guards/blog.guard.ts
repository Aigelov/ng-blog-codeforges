import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../../common/auth/services/auth.service';

@Injectable()
export class BlogGuard implements CanActivate {

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const userAuthorized: boolean = this.authService.authorized();

    if (!userAuthorized) {
      this.router.navigate(['login']);
    }

    return of(userAuthorized);
  }
}
