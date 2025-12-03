import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'proyectoLudix',
    loadChildren: () =>
<<<<<<< HEAD
      import('./proyectoLudix/ludix.routes').then((m) => m.default),
  },
   { path: '', redirectTo: 'proyectoLudix/vista-home', pathMatch: 'full' },
=======
      import('./proyectoLudix/ludix.routes').then(m => m.default),
  },
  { path: '', redirectTo: 'proyectoLudix/vista-home', pathMatch: 'full' },
>>>>>>> e673a0af3f5a2f1b4b70a71092620f6149e0ff18
  { path: '**', redirectTo: 'proyectoLudix/vista-home' }
];
