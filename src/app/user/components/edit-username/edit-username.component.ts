import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from '../../../core/models/user';
import { AuthService } from '../../../core/services/auth.service';
import { noWhiteSpaceValidator } from '../../../core/functions/validators';
import { take } from 'rxjs';

@Component({
  selector: 'app-edit-username',
  templateUrl: './edit-username.component.html',
  styleUrl: './edit-username.component.scss',
})
export class EditUsernameComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  user!: User | null;
  usernameForm!: FormGroup;
  username!: FormControl;

  ngOnInit(): void {
    this.user = this.auth.userLogged;
    this.buildForm();
  }
  buildForm(): void {
    this.username = new FormControl(this.user?.username, [
      Validators.required,
      noWhiteSpaceValidator,
    ]);
    this.usernameForm = this.fb.group({ username: this.username });
    if (this.user) {
      this.patchFormValues();
    }
  }
  patchFormValues() {
    this.usernameForm.patchValue({
      username: this.user?.username,
    });
  }
  onSubmit(): void {
    this.userService
      .updateUser(this.user?.id, this.usernameForm.value)
      .pipe(take(1))
      .subscribe((res) => {
        console.log('Utente aggiornato', res);
      });

    this.router.navigate(['/user']);
  }
}
