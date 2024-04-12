import { Component, OnInit } from '@angular/core';
import { Article } from '../../../core/models/article';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.scss',
})
export class ArticleDetailComponent implements OnInit {
  article!: Article;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    console.log('in dettaglio');
    this.route.data.subscribe((data) => {
      const article: Article = data['article'];
      this.article = article;
    });
  }
}
