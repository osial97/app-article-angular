import { Component, OnInit } from '@angular/core';
import { Article } from '../../../core/models/article';
import { ActivatedRoute, Route } from '@angular/router';
import { UserService } from '../../../user/services/user.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.scss',
})
export class ArticleDetailComponent implements OnInit {
  article!: Article;
  autore!: string;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    //  console.log('in dettaglio');
    this.route.data.subscribe((data) => {
      const article: Article = data['article'];

      this.article = article;
      this.userService
        .getUserById(this.article.autore.toString())
        .pipe()
        .subscribe((user) => {
          console.log(this.article);
          this.autore = user.nomePenna ? user.nomePenna : '';
        });
    });
  }
}
