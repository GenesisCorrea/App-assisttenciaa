import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../service/firebase.service';
import { UtilsService } from '../service/utils.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(private firebaseSvs: FirebaseService, private utilsSvs: UtilsService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Promise((resolve) => {

      this.firebaseSvs.getAuth().onAuthStateChanged((auth) => {

        if (!auth) {
          resolve(true);
        } else {
          const userEmail = auth.email;
          if (userEmail && userEmail.includes('@profesor.cl')) {
            this.utilsSvs.routerLink('/main-profesor');
          } else {
            this.utilsSvs.routerLink('/main/home');
          }
          resolve(false);
        }

      });
    });
  }
}