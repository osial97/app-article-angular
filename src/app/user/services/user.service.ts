import { Injectable } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../../core/models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userEdited$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  updateUser(id: string | number | undefined, user: Partial<User>) {
    return this.http.patch(`${this.apiUrl}/users/${id}`, user).pipe(
      map((user) => {
        this.userEdited$.next(true);
        return user;
      })
    );
  }
  constructor(private authService: AuthService, private http: HttpClient) {}
  apiUrl: string = this.authService.apiUrl;
  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${id}`).pipe(
      map((user) => {
        return user;
      })
    );
  }
}
