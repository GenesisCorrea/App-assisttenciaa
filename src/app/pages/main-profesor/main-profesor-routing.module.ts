import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainProfesorPage } from './main-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: MainProfesorPage,
    children: [
      {
        path: 'home-profesor',
        loadChildren: () => import('./home-profesor/home-profesor.module').then(m => m.HomeProfesorPageModule)
      },
      {
        path: 'profile-profesor',
        loadChildren: () => import('./profile-profesor/profile-profesor.module').then(m => m.ProfileProfesorPageModule)
      },
      {
        path: 'asignaturas-profesor',
        loadChildren: () => import('./asignaturas-profesor/asignaturas-profesor.module').then( m => m.AsignaturasProfesorPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainProfesorPageRoutingModule {}
