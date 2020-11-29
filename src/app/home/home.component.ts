import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  public user: Observable<any> = this.authSvc.afAuth.user;
  private isLogged;
  private CurrentUser;
  private UserToken;
  public user$ = false;

  constructor(private authSvc: AuthService, private router: Router) { }

  
  ngOnInit(): void {
    this.getCurrentAppUser();
  }

  getCurrentAppUser() {

    let token = localStorage.getItem('ACCESS_TOKEN');
    let user = JSON.parse(localStorage.getItem('CurrentUser'));
    if (user && token) {
      this.isLogged=true;
      this.CurrentUser = user;
      this.UserToken = token;
      this.user$ = true;
    } else {
      console.log('No Current User');
    }
  }

  FormAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Usuario o Contraseña Incorrectos, Ingresa nuevamente los datos',
    })
  }

  SuccessAlert() {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Sesion Iniciada Correctamente',
      showConfirmButton: false,
      timer: 1500
    })
  }

  PassAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Las Contraseñas no Coinciden!',
    })
  }

  serverError(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Error en el servidor!',
    })
  }

  successNotification() {
    Swal.fire('Hi', 'We have been informed!', 'success')
  }
}
