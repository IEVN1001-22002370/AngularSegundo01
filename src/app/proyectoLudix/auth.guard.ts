import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const usuario = localStorage.getItem('usuario');
  const router = inject(Router);

  if (!usuario) {
    return router.createUrlTree(['/proyectoLudix/login']);
  }

  return true;
};
