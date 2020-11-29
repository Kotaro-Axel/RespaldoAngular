import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { AppUser } from '../Models/AppUser';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {


  public newuser: AppUser;

  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password1: new FormControl(''),
    password2: new FormControl(''),
  });

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  async onRegister() {
    this.newuser = {} = await this.registerForm.value;
    let form = await this.isValid(this.newuser);
    if (form) {
      try {
        let Response = await this.authSvc.authRegister(this.newuser).subscribe(async data => {
          this.SuccessAlert();
          await this.router.navigate(['/LandingHome']);
          window.location.reload();
        })
      } catch (error) {
        this.serverError();
      }
    } else {
      this.FormAlert();
    }
  }

  isValid(appu: AppUser) {
    if (appu.username != '' && appu.email != '' && appu.email.includes('@') && appu.email.includes('.com') && appu.password1 === appu.password2) {
      return true;
    } else if (appu.password1 != appu.password2) {
      this.PassAlert();
      return false;
    } else {
      return false;
    }
  }

  FormAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No Rellenaste Correctamente Todos los Campos',
    })
  }

  PassAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Las Contraseñas no Coinciden!',
    })
  }

  serverError() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Error en el servidor!',
    })
  }

  SuccessAlert() {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Usuario Creado Correctamente',
      showConfirmButton: false,
      timer: 1500
    })
  }


  successNotification() {
    Swal.fire('Hi', 'We have been informed!', 'success')
  }


}
