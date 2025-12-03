import { Routes } from '@angular/router';

export default [
  {
<<<<<<< HEAD
    path: 'home',
    loadComponent: () =>
      import('./vista-home/vista-home.component').then(
        m => m.VistaHomeComponent
      )
=======
    path: 'vista-home',
    loadComponent: () =>
      import('./vista-home/vista-home.component')
        .then(m => m.VistaHomeComponent)
>>>>>>> e673a0af3f5a2f1b4b70a71092620f6149e0ff18
  },
  {
    path: 'login',
    loadComponent: () =>
<<<<<<< HEAD
      import('./vista-login/vista-login.component').then(
        m => m.VistaLoginComponent
      )
=======
      import('./vista-login/vista-login.component')
        .then(m => m.VistaLoginComponent)
>>>>>>> e673a0af3f5a2f1b4b70a71092620f6149e0ff18
  },
  {
    path: 'signup',
    loadComponent: () =>
<<<<<<< HEAD
      import('./vista-sign-up/vista-sign-up.component').then(
        m => m.VistaSignUpComponent
      )
=======
      import('./vista-sign-up/vista-sign-up.component')
        .then(m => m.VistaSignUpComponent)
  },
  {
    path: 'test',
    loadComponent: () => import('./vista-test/vista-test.component')
>>>>>>> e673a0af3f5a2f1b4b70a71092620f6149e0ff18
  },
  {
    path: 'perfil',
    loadComponent: () =>
<<<<<<< HEAD
      import('./vista-perfil/vista-perfil.component').then(
        m => m.VistaPerfilComponent
      )
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./vista-admin/vista-admin.component').then(
        m => m.VistaAdminComponent
      )
  },
  {
    path: 'analitica',
    loadComponent: () =>
      import('./vista-analitica/vista-analitica.component').then(
        m => m.VistaAnaliticaComponent
      )
=======
      import('./vista-perfil/vista-perfil.component')
        .then(m => m.VistaPerfilComponent)
>>>>>>> e673a0af3f5a2f1b4b70a71092620f6149e0ff18
  },
  {
    path: 'recuperar',
    loadComponent: () =>
<<<<<<< HEAD
      import('./vista-recuperar/vista-recuperar.component').then(
        m => m.VistaRecuperarComponent
      )
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./vista-contacto/vista-contacto.component').then(
        m => m.VistaContactoComponent
      )
  },
  {
    path: 'pasarela',
    loadComponent: () =>
      import('./vista-pasarela/vista-pasarela.component').then(
        m => m.VistaPasarelaComponent
      )
  },
  {
    path: 'simulador',
    loadComponent: () =>
      import('./vista-simulador/vista-simulador.component').then(
        m => m.VistaSimuladorComponent
      )
  },
  {
    path: 'test',
    loadComponent: () =>
      import('./vista-test/vista-test.component').then(
        m => m.VistaTestComponent
      )
=======
      import('./vista-recuperar/vista-recuperar.component')
        .then(m => m.VistaRecuperarComponent)
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./vista-admin/vista-admin.component')
        .then(m => m.VistaAdminComponent)
>>>>>>> e673a0af3f5a2f1b4b70a71092620f6149e0ff18
  },
  {
    path: 'videos',
    loadComponent: () =>
<<<<<<< HEAD
      import('./vista-videos/vista-videos.component').then(
        m => m.VistaVideosComponent
      )
=======
      import('./vista-videos/vista-videos.component')
        .then(m => m.VistaVideosComponent)
>>>>>>> e673a0af3f5a2f1b4b70a71092620f6149e0ff18
  }
] as Routes;
