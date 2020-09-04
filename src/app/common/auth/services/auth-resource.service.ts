import { Injectable } from '@angular/core';
import { UserLogin } from '../../user/models/user-login';
import { Observable, of } from 'rxjs';
import { AuthToken } from '../models/auth-token';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../../api.config';

@Injectable()
export class AuthResourceService {

  private readonly URL = `${ApiConfig}/auth`;

  constructor(
    private readonly httpClient: HttpClient
  ) {
  }

  public signInUser(user: UserLogin): Observable<AuthToken> {
    return of({ expiresIn: 16000, token: 'SecretTokenString' });
  }
}
