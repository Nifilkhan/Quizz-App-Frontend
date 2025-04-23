import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { questionGuardGuard } from './question-guard.guard';

describe('questionGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => questionGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
