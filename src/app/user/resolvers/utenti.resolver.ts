import { ResolveFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';
import { EMPTY, catchError, mergeMap, of } from 'rxjs';
import { User } from '../../core/models/user';

export const utentiResolver: ResolveFn<User> = (route, state) => {
  const router: Router = inject(Router);
  const userService: UserService = inject(UserService);
  const id: string | null = route.paramMap.get('id');

  if (id) {
    return userService.getUserById(id).pipe(
      mergeMap((user) => {
        if (user) {
          return of(user);
        } else {
          router.navigate(['/']);
          return EMPTY;
        }
      }),
      catchError((error) => {
        window.alert('User not found');
        router.navigate(['/']);
        return EMPTY;
      })
    );
  } else {
    router.navigate(['/']);
    return EMPTY;
  }
};
