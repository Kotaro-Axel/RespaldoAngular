import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public user: User;

  constructor(public afAuth: AngularFireAuth) { }

  async login(email: string, password: string) {
    try {
      const resultado = await this.afAuth.signInWithEmailAndPassword(email, password);
      return resultado;
    }
    catch (error) {
      console.log(error);
    }
  }

  async loginGoogle() {
    try {
      return this.afAuth.signInWithPopup( new auth.GoogleAuthProvider());
    } catch (error) {
      console.log(error);
    }
  }

  async register(email: string, password: string) {
    try {
      const resultado = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return resultado;
    }
    catch (error) {
      console.log(error);
    }
  }

  async logOut() {
    try {
      await this.afAuth.signOut();
      //redirect
    }
    catch (error) {
      console.log(error);
    }
  }

  getCurrentUser() {
    try {
      return this.afAuth.authState.pipe(first()).toPromise();
    } catch (error) {
      console.log(error);
    }
  }


}
