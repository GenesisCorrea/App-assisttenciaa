// asignaturas-profesor.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasProfesorService {
  private asignaturasProfesor = [
    {
      id: 'profesor1',
      nombre: 'Programación Avanzada',
      imagen: 'assets/img/programacion-avanzada.png',
      sigla: 'PROG5001',
      // ... otras propiedades
    },
    // ... otras asignaturas del profesor
  ];

  constructor() { }

  getAsignaturasProfesor() {
    return this.asignaturasProfesor;
  }

  getAsignaturaProfesorPorId(id: string) {
    return this.asignaturasProfesor.find(asignatura => asignatura.id === id);
  }
}
