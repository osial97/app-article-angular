import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { articleDetailResolver } from './article-detail.resolver';
import { Article } from '../../core/models/article';

describe('articleDetailResolver', () => {
  const executeResolver: ResolveFn<Article> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() =>
      articleDetailResolver(...resolverParameters)
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
