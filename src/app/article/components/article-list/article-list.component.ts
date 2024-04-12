import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, map } from 'rxjs';
import { Article } from '../../../core/models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleListComponent implements OnInit, OnDestroy {
  destroy$: Subject<void> = new Subject<void>();
  articles$!: Observable<Array<Article>>;
  latestArticles$!: Observable<Array<Article>>;
  category!: string | null;

  constructor(private articleService: ArticleService, private router: Router) {}
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnInit(): void {
    this.articleService.getArticleById('1');
    this.category = localStorage.getItem('articleCategory');
    console.log(this.category);
    this.loadArticlesList();
    if (this.category === 'all') {
    } else {
    }
  }
  getLatestArticles(): Observable<Array<Article>> {
    return this.articles$.pipe(
      map((articles) =>
        articles
          .sort((a, b) => {
            const dateA =
              a.dataModifica !== ''
                ? new Date(a.dataModifica)
                : new Date(a.dataCreazione);
            const dateB =
              b.dataModifica !== ''
                ? new Date(b.dataModifica)
                : new Date(b.dataCreazione);
            return dateB.getTime() - dateA.getTime();
          })
          .slice(0, 3)
      )
    );
  }
  loadArticlesList() {
    if (this.category === 'all') {
      this.articles$ = this.articleService.getArticles();
    } else {
      this.articles$ = this.articleService.getArticlesByCategory(this.category);
    }
    this.latestArticles$ = this.getLatestArticles();
  }
}
