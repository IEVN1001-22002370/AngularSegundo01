import { Routes } from "@angular/router";

export default [
  {
    path: 'home',
    loadComponent: () => import('./vista-home/vista-home.component')
  },
  {
    path: 'login',
    loadComponent: () => import('./vista-login/vista-login.component')
  },
  {
    path: 'signup',
    loadComponent: () => import('./vista-sign-up/vista-sign-up.component')
  },
  {
   path: 'test',
    loadComponent: () => import('./vista-test/vista-test.component')
  },
  {
    path: 'perfil',
    loadComponent: () => import('./vista-perfil/vista-perfil.component')
      .then(m => m.VistaPerfilComponent)
  }
] as Routes;
