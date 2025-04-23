import { inject, Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const quizCompletionGuard: CanActivateFn = (route, state) => {

  const isQuizeCompleted = sessionStorage.getItem('quizCompleted') === 'true';

  if(isQuizeCompleted){
    return true;
  } else{
    const router = inject(Router);
    router.navigate(['/']);
    return false;
  }
};
