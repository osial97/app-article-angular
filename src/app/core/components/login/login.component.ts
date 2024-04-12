import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { BehaviorSubject, take } from 'rxjs';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  isLoginAttempt: boolean = true;

  loginForm!: FormGroup;
  username!: FormControl;
  password!: FormControl;

  isWrongAttempt$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  hide = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.username = new FormControl(null, [Validators.required]);
    this.password = new FormControl(null, [Validators.required]);

    this.loginForm = this.fb.group({
      username: this.username,
      password: this.password,
    });
  }

  login(isLogin: boolean = true): void {
    if (isLogin) {
      this.isLoginAttempt = true;
      this.authService
        .login(this.loginForm.value)
        .pipe(take(1))
        .subscribe(() => {
          if (this.authService.isLoggedIn) this.router.navigate(['']);
          else this.isWrongAttempt$.next(true);
        });
    } else {
      this.isLoginAttempt = false;
      this.authService
        .signin(this.loginForm.value)
        .pipe(take(1))
        .subscribe((res) => {
          if (res) {
            this.authService
              .registerUser(this.loginForm.value)
              .pipe(take(1))
              .subscribe((res) => {
                if (res) this.login();
                else this.isWrongAttempt$.next(true);
              });
          } else {
            this.username.setErrors({ usernameInUse: true });
          }
        });
    }
  }
}
