import { Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { ArticleModule } from '../article.module';
import { Article } from '../../core/models/article';

@Injectable({
  providedIn: ArticleModule,
})
export class ArticleService {
  apiUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getArticles(): Observable<Array<Article>> {
    return this.http.get<Array<Article>>(`${this.apiUrl}/articles`).pipe(
      map((articles) => {
        return articles;
      })
    );
  }
  getArticlesByCategory(category: string | null): Observable<Array<Article>> {
    return this.http
      .get<Array<Article>>(`${this.apiUrl}/articles?categoria=${category}`)
      .pipe(
        map((articles) => {
          return articles;
        })
      );
  }
  getArticleById(id: string | number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/articles/${id}`).pipe(
      map((article) => {
        // console.log(article);
        return article;
      })
    );
  }
}
