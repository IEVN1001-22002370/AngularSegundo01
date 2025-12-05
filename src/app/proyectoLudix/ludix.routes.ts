import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export default [
  {
    path: 'home',
    loadComponent: () =>
      import('./vista-home/vista-home.component').then(
        (m) => m.VistaHomeComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./vista-login/vista-login.component').then(
        (m) => m.VistaLoginComponent
      ),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./vista-sign-up/vista-sign-up.component').then(
        (m) => m.VistaSignUpComponent
      ),
  },
  {
    path: 'perfil',
    loadComponent: () =>
      import('./vista-perfil/vista-perfil.component').then(
        (m) => m.VistaPerfilComponent
      ),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./vista-admin/vista-admin.component').then(
        (m) => m.VistaAdminComponent
      ),
  },
  {
    path: 'analitica',
    loadComponent: () =>
      import('./vista-analitica/vista-analitica.component').then(
        (m) => m.VistaAnaliticaComponent
      ),
  },
  {
    path: 'recuperar',
    loadComponent: () =>
      import('./vista-recuperar/vista-recuperar.component').then(
        (m) => m.VistaRecuperarComponent
      ),
  },
  {
    path: 'pasarela',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./vista-pasarela/vista-pasarela.component').then(
        (m) => m.VistaPasarelaComponent
      ),
  },
  {
    path: 'simulador',
    loadComponent: () =>
      import('./vista-simulador/vista-simulador.component').then(
        (m) => m.VistaSimuladorComponent
      ),
  },
  {
    path: 'test',
    loadComponent: () =>
      import('./vista-test/vista-test.component').then(
        (m) => m.VistaTestComponent
      ),
  },
  {
    path: 'videos',
    loadComponent: () =>
      import('./vista-videos/vista-videos.component').then(
        (m) => m.VistaVideosComponent
      ),
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./vista-contacto/vista-contacto.component').then(
        (m) => m.VistaContactoComponent
      ),
  },
  {
    path: 'reportes',
    loadComponent: () =>
      import('./vista-reporte/vista-reporte.component').then(
        (m) => m.VistaReporteComponent
      ),
  },
  {
    path: 'usuarios',
    loadComponent: () =>
      import('./vista-admin/vista-admin.component').then(
        (m) => m.VistaAdminComponent
      ),
  },
] as Routes;
