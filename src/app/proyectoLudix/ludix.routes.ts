import { Routes } from '@angular/router';

export default [
  {
    path: 'vista-home',
    loadComponent: () =>
      import('./vista-home/vista-home.component')
        .then(m => m.VistaHomeComponent)
  },
 {
  path: 'login',
  loadComponent: () =>
    import('./vista-login/vista-login.component')
      .then(m => m.VistaLoginComponent)
},
  {
    path: 'signup',
    loadComponent: () =>
      import('./vista-sign-up/vista-sign-up.component')
        .then(m => m.VistaSignUpComponent)
  },
  {
    path: 'perfil',
    loadComponent: () =>
      import('./vista-perfil/vista-perfil.component')
        .then(m => m.VistaPerfilComponent)
  }
] as Routes;
