import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {
  private asignaturas = [
    { 
      id: 'asignatura1',
      nombre: 'Programación Móvil',
      imagen: 'assets/img/Captura de pantalla 2023-10-10 152917.png',
      sigla: 'PGY4121', 
      porcentajeAsistencia: 90, 
      fecha: '01/10/2023', 
      asistencia: 'Presente',
      showDetails: false
    },
    { 
      id: 'asignatura2',
      nombre: 'Arquitectura',
      imagen: 'assets/img/Captura de pantalla 2023-10-10 152953.png',
      sigla: 'ASY4131',
      porcentajeAsistencia: 90, 
      fecha: '01/10/2023', 
      asistencia: 'Presente'
    },
    { 
      id: 'asignatura3',
      nombre: 'Calidad de Software',
      imagen: 'assets/img/Captura de pantalla 2023-10-10 153039.png',
      sigla: 'CSY4111',
      porcentajeAsistencia: 90, 
      fecha: '01/10/2023', 
      asistencia: 'Presente'
    },
    { 
      id: 'asignatura4',
      nombre: 'Estadística Descriptiva',
      imagen: 'assets/img/Captura de pantalla 2023-10-10 153055.png',
      sigla: 'MAT4140',
      porcentajeAsistencia: 90, 
      fecha: '01/10/2023', 
      asistencia: 'Presente'
    }
  ];

  constructor() { }

  getAsignaturas() {
    return this.asignaturas;
  }
  getAsignaturaPorId(id: string) {
    return this.asignaturas.find(asignatura => asignatura.id === id);
  }
}
