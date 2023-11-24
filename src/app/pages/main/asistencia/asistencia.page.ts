import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsignaturasService } from 'src/app/service/asignaturas.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: 'asistencia.page.html',
  styleUrls: ['asistencia.page.scss']
})
export class AsistenciaPage {
  asignaturaId: string;
  asignatura: any;

  constructor(private route: ActivatedRoute, private asignaturasService: AsignaturasService) {
    this.route.paramMap.subscribe(params => {
      this.asignaturaId = params.get('asignaturaId');
      this.asignatura = this.asignaturasService.getAsignaturaPorId(this.asignaturaId);
      // Lógica para cargar la asistencia de la asignatura utilizando this.asignatura
    });
  }

  toggleCardDetails(asignatura) {
    asignatura.showDetails = !asignatura.showDetails;
  }
}

