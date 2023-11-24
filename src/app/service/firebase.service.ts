// firebase.service.ts

import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import { User } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc, getDoc } from '@angular/fire/firestore';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  utilsSvc = inject(UtilsService);

  // Autenticación
  getAuth() {
    return getAuth();
  }

  // Iniciar sesión
  signIn(user: User) {
    // Verificar el dominio del correo electrónico antes de autenticar
    if (user.email.endsWith('@profesor.duoc.cl') || user.email.endsWith('@duocuc.cl')) {
      return signInWithEmailAndPassword(getAuth(), user.email, user.password);
    } else {
      // Lógica para manejar el caso de dominio no válido
      console.error('Dominio de correo electrónico no válido');
      // Puedes lanzar un error, mostrar un mensaje al usuario, etc.
      return Promise.reject('Dominio de correo electrónico no válido');
    }
  }

  // Registrar usuario
  signUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  // Actualizar usuario
  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, { displayName });
  }

  // Enviar email para restablecer contraseña
  sendRecoveryEmail(email: string) {
    return sendPasswordResetEmail(getAuth(), email);
  }

  // Cerrar sesión
  signOut() {
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utilsSvc.routerLink('/auth');
  }

  // Base de datos

  // Establecer un documento
  setDocument(path: string, data: any) {
    return setDoc(doc(getFirestore(), path), data);
  }

  // Obtener un documento
  async getDocument(path: string) {
    return (await getDoc(doc(getFirestore(), path))).data();
  }
}
