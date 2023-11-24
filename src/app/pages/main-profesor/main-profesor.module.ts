import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainProfesorPageRoutingModule } from './main-profesor-routing.module';

import { MainProfesorPage } from './main-profesor.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainProfesorPageRoutingModule,
    SharedModule
  ],
  declarations: [MainProfesorPage]
})
export class MainProfesorPageModule {}
