import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';

import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = 'http://localhost:3000';

  isLoggedIn: boolean = false;
  userLogged: User | null = null;

  redirectNoAuthUrl: string = '/login';

  constructor(private http: HttpClient) {}

  login(user: User): Observable<boolean> {
    return this.checkCredentials(user).pipe(
      map((res) => {
        if (res) {
          this.isLoggedIn = true;
          this.userLogged = res;
          return true;
        } else {
          this.isLoggedIn = false;
          this.userLogged = null;
          return false;
        }
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.userLogged = null;
  }

  checkCredentials(user: User, isLogin: boolean = true): Observable<User> {
    const options = {
      params: new HttpParams().set('username', user.username),
    };

    if (isLogin) options.params.set('password', user.password);

    return this.http
      .get<Array<User>>(`${this.apiUrl}/users`, options)
      .pipe(map((res) => res[0]));
  }

  signin(user: User): Observable<boolean> {
    return this.checkCredentials(user, false).pipe(
      map((res) => {
        if (res) {
          return false;
        } else {
          return true;
        }
      })
    );
  }

  registerUser(cred: User): Observable<User> {
    const newUser = new User(cred);
    return this.http.post<User>(`${this.apiUrl}/users`, newUser).pipe(
      map((user) => {
        return user;
      })
    );
  }
}
