import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { first } from 'rxjs/operators';
import { AppUser } from '../Models/AppUser';
import { AuthResponse } from '../Models/AuthResponse';
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  private appuser: AppUser;
  private CurrentUser: AppUser;

  private API_REST = 'https://backend-web-dj.herokuapp.com/api/v1/auth/'
  private Token;


  constructor(public afAuth: AngularFireAuth, private http: HttpClient) { }

  async loginGoogle() {
    try {
      //return this.afAuth.signInWithRedirect(new auth.GoogleAuthProvider());
      return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
    } catch (error) {
      console.log(error);
    }
  }


  //-----------------------------------********Auth********----------------------------------//

  authRegister(newUser: AppUser): Observable<AuthResponse> {
    try {
      return this.http.post<AuthResponse>(`${this.API_REST}registration/`,
        newUser).pipe(tap(
          (res: AuthResponse) => {
            if (res) {
              newUser.password1 = "*******";
              newUser.password2 = "*******";
              this.setToken(res.key, newUser);
            }
          })
        );
    } catch (error) {
      console.log('error : ' + error);
    }
  }

  authLogin(newUser: AppUser): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_REST}login/`,
      newUser).pipe(tap(
        (res: AuthResponse) => {
          if (res) {
            newUser.password1 = "*******";
            newUser.password2 = "*******";
            this.setToken(res.key, newUser);
            this.loggedIn.next(true);
          }
        })
      );
  }

  authLogout(key = ''){
    this.Token = '';
    this.CurrentUser = null;
    this.loggedIn.next(false);
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("CurrentUser");
  }

  // authLogout(key=''):Observable<AuthResponse>{

  //   return this.http.post<AuthResponse>(`${this.API_REST}logout/`,
  //     null).pipe(tap(
  //       (res: AuthResponse) =>{
  //         if(res){
  //           this.Token='';
  //           this.CurrentUser=null;
  //           this.loggedIn.next(false);
  //           localStorage.removeItem("ACCESS_TOKEN");
  //           localStorage.removeItem("CurrentUser");
  //         }
  //       })
  //     );
  // }

  private setToken(token: string, newuser: AppUser) {
    localStorage.setItem('ACCESS_TOKEN', token);
    localStorage.setItem('CurrentUser', JSON.stringify(newuser));
    this.Token = token;
    this.CurrentUser = newuser;
  }

  private getToken() {
    if (!this.Token) {
      this.Token = localStorage.getItem('ACCESS_TOKEN')
    }
    return this.Token;
  }

  get onlogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

}