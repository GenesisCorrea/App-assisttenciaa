import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/service/firebase.service';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-main-profesor',
  templateUrl: './main-profesor.page.html',
  styleUrls: ['./main-profesor.page.scss'],
})
export class MainProfesorPage implements OnInit {

  pages = [
    { title: 'Inicio', url: '/main-profesor/home', icon: 'home-outline' },
    { title: 'Perfil', url: '/main-profesor/profile', icon: 'person-outline' },
  ];

  router = inject(Router);
  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  currentPath: string = '';

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event?.url) this.currentPath = event.url;
    });
  }

  user(): User {
    return this.utilsSvc.getFromLocalStorage('user');
  }

  // ==========Cerrar sesion=======
  signOut() {
    this.firebaseSvc.signOut();
  }
}
