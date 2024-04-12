import { ResolveFn, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { inject } from '@angular/core';
import { EMPTY, catchError, mergeMap, of } from 'rxjs';
import { Article } from '../../core/models/article';

export const articleDetailResolver: ResolveFn<Article> = (route, state) => {
  const router: Router = inject(Router);
  const articleService: ArticleService = inject(ArticleService);
  const id: string | null = route.paramMap.get('id');
  if (id) {
    return articleService.getArticleById(id).pipe(
      mergeMap((article) => {
        if (article) {
          return of(article);
        } else {
          router.navigate(['/article']);
          return EMPTY;
        }
      }),
      catchError((error) => {
        window.alert('Article not found');
        router.navigate(['/article']);
        return EMPTY;
      })
    );
  } else {
    router.navigate(['/article']);
    return EMPTY;
  }
};
