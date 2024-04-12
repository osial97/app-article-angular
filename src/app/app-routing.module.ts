import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './core/components/homepage/homepage.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { authGuard } from './core/guards/auth.guard';
const routes: Routes = [
  { path: '', component: HomepageComponent, canActivate: [authGuard] },
  {
    path: 'login',
    loadComponent: () =>
      import('./core/components/login/login.component').then(
        (mod) => mod.LoginComponent
      ),
  },
  {
    path: 'article',
    loadChildren: () =>
      import('./article/article.module').then((m) => m.ArticleModule),
    title: 'Articles',
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
