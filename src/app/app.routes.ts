import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: () =>
  //     import('./auth/features/auth.routes').then((m) => m.default),
  // },
  {
    path: 'home',
    loadChildren: () =>
      import('./utl/utl.routes').then((m) => m.default),
  },
  {
    path: 'proyectoLudix/vista-test',
    loadComponent: () => 
      import('./proyectoLudix/vista-test/vista-test.component').then(m => m.VistaTestComponent)
  },
  {
  path: 'proyectoLudix/simulador',
  loadComponent: () => 
    import('./proyectoLudix/vista-simulador/vista-simulador.component').then(m => m.VistaSimuladorComponent)
  },
  // {
  //   path: 'formularios',
  //   loadChildren: () =>
  //     import('./formularios/formularios.routes').then((m) => m.default),
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
