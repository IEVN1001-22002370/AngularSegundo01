import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'proyectoLudix',
    loadChildren: () =>
      import('./proyectoLudix/ludix.routes').then((m) => m.default),
  },
   { path: '', redirectTo: 'proyectoLudix/vista-home', pathMatch: 'full' },
  { path: '**', redirectTo: 'proyectoLudix/vista-home' }
];
