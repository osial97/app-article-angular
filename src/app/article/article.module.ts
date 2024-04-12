import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleService } from './services/article.service';

import { HttpClientModule } from '@angular/common/http';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';

@NgModule({
  declarations: [ArticleListComponent, ArticleDetailComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [ArticleService],
})
export class ArticleModule {}
