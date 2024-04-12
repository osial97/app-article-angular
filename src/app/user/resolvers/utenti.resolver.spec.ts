import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { utentiResolver } from './utenti.resolver';
import { User } from '../../core/models/user';

describe('utentiResolver', () => {
  const executeResolver: ResolveFn<User> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => utentiResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
