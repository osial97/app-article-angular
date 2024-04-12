import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../core/models/user';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit, OnDestroy {
  constructor(private authService: AuthService, private router: Router) {}
  userLogged!: User | null;
  destroy$: Subject<void> = new Subject<void>();
  // userEdited$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnInit(): void {
    this.userLogged = this.authService.userLogged;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate([this.authService.redirectNoAuthUrl]);
  }
}
