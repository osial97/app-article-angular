import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { noWhiteSpaceValidator } from '../../../core/functions/validators';
import { User } from '../../../core/models/user';
import { AuthService } from '../../../core/services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrl: './edit-password.component.scss',
})
export class EditPasswordComponent {
  constructor(
    private auth: AuthService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  user!: User | null;
  passwordForm!: FormGroup;
  password!: FormControl;

  ngOnInit(): void {
    this.user = this.auth.userLogged;
    this.buildForm();
  }
  buildForm(): void {
    this.password = new FormControl(this.user?.password, [
      Validators.required,
      noWhiteSpaceValidator,
    ]);
    this.passwordForm = this.fb.group({ password: this.password });
    if (this.user) {
      this.patchFormValues();
    }
  }
  patchFormValues() {
    this.passwordForm.patchValue({
      password: this.user?.password,
    });
  }
  onSubmit(): void {
    this.userService
      .updateUser(this.user?.id, this.passwordForm.value)
      .pipe(take(1))
      .subscribe((res) => {
        console.log('Utente aggiornato', res);
      });

    this.router.navigate(['/user']);
  }
}
