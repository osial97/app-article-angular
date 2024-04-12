import { Component, OnDestroy, OnInit } from '@angular/core';
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
  selector: 'app-edit-nomepenna',
  templateUrl: './edit-nomepenna.component.html',
  styleUrl: './edit-nomepenna.component.scss',
})
export class EditNomepennaComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  user!: User | null;
  nomePennaForm!: FormGroup;
  nomePenna!: FormControl;

  ngOnInit(): void {
    this.user = this.auth.userLogged;
    this.buildForm();
  }
  buildForm(): void {
    this.nomePenna = new FormControl(this.user?.nomePenna, [
      Validators.required,
      noWhiteSpaceValidator,
    ]);
    this.nomePennaForm = this.fb.group({ nomePenna: this.nomePenna });
    if (this.user) {
      this.patchFormValues();
    }
  }
  patchFormValues() {
    this.nomePennaForm.patchValue({
      nomePenna: this.user?.nomePenna,
    });
  }
  onSubmit(): void {
    this.userService
      .updateUser(this.user?.id, this.nomePennaForm.value)
      .pipe(take(1))
      .subscribe((res) => {
        console.log('Utente aggiornato', res);
      });

    this.router.navigate(['/user']);
  }
}
