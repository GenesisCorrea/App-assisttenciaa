import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignaturasProfesorPageRoutingModule } from './asignaturas-profesor-routing.module';

import { AsignaturasProfesorPage } from './asignaturas-profesor.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignaturasProfesorPageRoutingModule,
    SharedModule
  ],
  declarations: [AsignaturasProfesorPage]
})
export class AsignaturasProfesorPageModule {}
