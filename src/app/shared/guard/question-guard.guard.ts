import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const questionGuard: CanActivateFn = (route, state) => {
  const isSubjectedSelected = sessionStorage.getItem('subjectSelected');

  if(isSubjectedSelected){
    return true;
  }else{
    const router = inject(Router);
    router.navigate(['/'])
    return false;
  }
};
