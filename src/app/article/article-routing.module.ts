import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleListComponent } from './components/article-list/article-list.component';
import { articleDetailResolver } from './resolvers/article-detail.resolver';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
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
  //   {
  //     path: 'details/:id',
  //     component: UserDetailsComponent,
  //     resolve: { student: userDetailNonNullableResolver },
  //   },
  //   {
  //     path: 'form',
  //     component: UserFormComponent,
  //     resolve: { editStudent: userDetailResolver },
  //   },
  // Percorso invoca resolve
  // ResolveData { chiave: ResolveFunction<tipoRitorno> }
  // Se ritorno della ResolveFunction !== tipoRitorno => non eseguo navigazione
  // Se ritorno della ResolveFunction === tipoRitorno => eseguo navigazione
  //  { path: '', redirectTo: 'list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routesArticle)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {}
