import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsignaturasProfesorService } from 'src/app/service/asignaturas-profesor.service';

@Component({
  selector: 'app-asignaturas-profesor',
  templateUrl: './asignaturas-profesor.page.html',
  styleUrls: ['./asignaturas-profesor.page.scss'],
})
export class AsignaturasProfesorPage implements OnInit {
  asignaturaId: string;
  asignatura: any;

  constructor(
    private route: ActivatedRoute,
    private asignaturasProfesorService: AsignaturasProfesorService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.asignaturaId = params.get('asignaturaId');
      this.asignatura = this.asignaturasProfesorService.getAsignaturaProfesorPorId(this.asignaturaId);
    });
  }

  // Agrega esta función
  toggleCardDetails(asignatura) {
    asignatura.showDetails = !asignatura.showDetails;
  }
}
