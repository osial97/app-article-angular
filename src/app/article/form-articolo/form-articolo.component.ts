import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user/services/user.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Article } from '../../core/models/article';
import { ArticleService } from '../services/article.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-form-articolo',
  templateUrl: './form-articolo.component.html',
  styleUrl: './form-articolo.component.scss',
})
export class FormArticoloComponent implements OnInit {
  articleForm!: FormGroup;
  titolo!: FormControl;
  testo!: FormControl;
  categoria!: FormControl;
  Categories: Array<string> = ['cultura', 'sport', 'politica'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private articleService: ArticleService
  ) {}
  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(): void {
    this.titolo = new FormControl(null, [Validators.required]);
    this.testo = new FormControl(null, [Validators.required]);
    this.categoria = new FormControl(null, [Validators.required]);

    this.articleForm = this.fb.group({
      titolo: this.titolo,
      testo: this.testo,
      categoria: this.categoria,
      // autore: this.authService.userLogged?.id,
      // dataCreazione: new Date().toDateString(),
    });
  }
  onSubmit(): void {
    let newArticle = new Article(this.articleForm.value);
    newArticle.autore = this.authService.userLogged?.id
      ? this.authService.userLogged?.id
      : '';
    newArticle.dataCreazione = new Date().toDateString();

    this.articleService
      .addArticle(newArticle)
      .pipe(take(1))
      .subscribe((res) => console.log('Articolo aggiunto', res));

    this.goToDashboard();
  }
  goToDashboard() {
    this.router.navigate(['/user']);
  }
}
