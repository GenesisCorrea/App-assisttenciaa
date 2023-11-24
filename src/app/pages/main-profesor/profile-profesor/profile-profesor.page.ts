import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/service/firebase.service';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-profile-profesor',
  templateUrl: './profile-profesor.page.html',
  styleUrls: ['./profile-profesor.page.scss'],
})
export class ProfileProfesorPage implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService)

  ngOnInit() {
  }


  user(): User {
    return this.utilsSvc.getFromLocalStorage('user');
  }
}
