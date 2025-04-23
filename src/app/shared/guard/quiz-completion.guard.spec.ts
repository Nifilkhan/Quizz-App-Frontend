import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { quizCompletionGuard } from './quiz-completion.guard';

describe('quizCompletionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => quizCompletionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
