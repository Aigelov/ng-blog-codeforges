import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { UserLogin } from '../../user/models/user-login';
import { AuthResourceService } from './auth-resource.service';
import { AuthToken } from '../models/auth-token';

@Injectable()
export class AuthService {

  private readonly AUTH_STORAGE_KEY = 'auth_token';

  constructor(
    private readonly resourceService: AuthResourceService,
    private readonly router: Router
  ) {
  }

  public signIn(user: UserLogin): Observable<void> {
    return this.resourceService.signInUser(user)
      .pipe(
        map(authToken => {
          this.storeToken(authToken);
          return;
        })
      );
  }

  public authorized(): boolean {
    return !_.isEmpty(this.loadToken());
  }

  private loadToken(): AuthToken {
    try {
      return JSON.parse(localStorage.getItem(this.AUTH_STORAGE_KEY));
    } catch {
      console.error('Bad JSON format for token item');
    }
  }

  private storeToken(authToken: AuthToken) {
    localStorage.setItem(this.AUTH_STORAGE_KEY, JSON.stringify(authToken));
  }

  private cleanToken() {
    localStorage.removeItem(this.AUTH_STORAGE_KEY);
  }

  public logout() {
    this.cleanToken();
    this.router.navigate(['login']);
  }
}
