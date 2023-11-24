import { Component, OnInit, inject } from '@angular/core';
import { FirebaseService } from 'src/app/service/firebase.service';
import { UtilsService } from 'src/app/service/utils.service';
import { AddUpdateProductComponent } from 'src/app/shared/components/add-update-product/add-update-product.component';
import { Router } from '@angular/router';
import { AsignaturasService } from 'src/app/service/asignaturas.service';  

@Component({
  selector: 'app-home-profesor',
  templateUrl: './home-profesor.page.html',
  styleUrls: ['./home-profesor.page.scss'],
})
export class HomeProfesorPage implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);
  asignaturas: any[] = [];

  constructor(private router: Router, private asignaturasService: AsignaturasService) {}

  ngOnInit() {
    this.asignaturas = this.asignaturasService.getAsignaturas();
  }

  toggleCardDetails(asignatura) {
    asignatura.showDetails = !asignatura.showDetails;
  }

  verAsistencia(asignaturaId) {
    this.router.navigateByUrl(`/asignaturas-profesor/${asignaturaId}`);
  }
  
  signOut() {
    this.firebaseSvc.signOut();
  }

  addUpdateProduct() {
    this.utilsSvc.presentModal({
      component: AddUpdateProductComponent,
      cssClass: 'add-update-modal'
    });
  }
}
