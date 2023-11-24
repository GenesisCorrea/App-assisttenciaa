import { Component, OnInit, inject } from '@angular/core';
import { FirebaseService } from 'src/app/service/firebase.service';
import { UtilsService } from 'src/app/service/utils.service';
import { AddUpdateProductComponent } from 'src/app/shared/components/add-update-product/add-update-product.component';
import { Router } from '@angular/router';
import { AsignaturasService } from 'src/app/service/asignaturas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);
    
  asignaturas: any[];

  constructor(private router: Router, private asignaturasService: AsignaturasService) {
    this.asignaturas = this.asignaturasService.getAsignaturas();
  }

  verAsistencia(asignaturaId: string) {
    this.router.navigate(['/asistencia', asignaturaId]);
  }
  
  ngOnInit() {
  }


   //==========Cerrar sesion=======
   signOut(){
    this.firebaseSvc.signOut();
  }

  //==========Agregar o Actualizar=======
  addUpdateProduct(){

      this.utilsSvc.presentModal({
        component: AddUpdateProductComponent,
        cssClass: 'add-update-modal'
      })
  }


}
