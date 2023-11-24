import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from './guards/no-auth.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule), canActivate:[NoAuthGuard]
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule), canActivate:[AuthGuard]
  },

  {
    path: 'asistencia/:asignaturaId', // Debe coincidir con el nombre del parámetro
    loadChildren: () => import('./pages/main/asistencia/asistencia.module').then(m => m.AsistenciaPageModule)
  },
  {
    path: 'main-profesor',
    loadChildren: () => import('./pages/main-profesor/main-profesor.module').then( m => m.MainProfesorPageModule)
  },
  {
    path: 'asignaturas-profesor/:asignaturaId',
    loadChildren: () => import('./pages/main-profesor/asignaturas-profesor/asignaturas-profesor.module').then(m => m.AsignaturasProfesorPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
