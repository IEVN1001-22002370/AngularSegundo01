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
   path: 'test',
    loadComponent: () => import('./vista-test/vista-test.component')
  },
  {
    path: 'perfil',
    loadComponent: () =>
      import('./vista-perfil/vista-perfil.component')
        .then(m => m.VistaPerfilComponent)
  },
  {
    path: 'recuperar',
    loadComponent: () =>
      import('./vista-recuperar/vista-recuperar.component')
        .then(m => m.VistaRecuperarComponent)
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./vista-admin/vista-admin.component')
        .then(m => m.VistaAdminComponent)
  }
] as Routes;
