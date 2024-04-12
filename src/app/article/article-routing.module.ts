import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleListComponent } from './components/article-list/article-list.component';
import { articleDetailResolver } from './resolvers/article-detail.resolver';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { FormArticoloComponent } from './form-articolo/form-articolo.component';
const routesArticle: Routes = [
  {
    path: '',
    component: ArticleListComponent,
  },
  {
    path: 'details/:id',
    component: ArticleDetailComponent,
    resolve: { article: articleDetailResolver },
  },
  {
    path: 'formArticle',
    component: FormArticoloComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routesArticle)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {}
