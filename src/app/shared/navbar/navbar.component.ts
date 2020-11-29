import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable , BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService]
})

export class NavbarComponent implements OnInit {

  constructor(public authSvc: AuthService, private router: Router) { }

  private isLogged;
  private CurrentUser;
  private UserToken;

  public user$ = false;

  ngOnInit() {
    this.getCurrentAppUser();
  }

  async onLogOut() {
    let uToken = this.UserToken;
    try {
      let Response = await this.authSvc.authLogout().subscribe();
      this.user$ = false;
      await this.router.navigate(['/LandingHome']);
    } catch (error) {
      this.serverError();      
    }
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
