import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppUser } from '../Models/AppUser';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  public newLoggin:AppUser;


  loginForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {

  }


  async onLogin(){

    this.newLoggin = {} = await this.loginForm.value;
    this.newLoggin.password2=this.newLoggin.password1;
    let form =  this.isValid(this.newLoggin);
    if (form) {
      try {
        let Response = this.authSvc.authLogin(this.newLoggin).subscribe(async data=>{
          await this.router.navigate(['/LandingHome']);
          await window.location.reload();
        });
      } catch (error) {
        console.log(error);
        this.serverError();      
      }
    }else{
      this.FormAlert();
    }

  }

  isValid(user:AppUser) {

    if (user.username != '' && user.email != '' && user.password1 != '' && user.email.includes('@') && user.email.includes('.com')) {
      return true;
    } else {
      return false;
    }
  }

  async onGoogleLogin() {
    //TO SERVICE
    try {
      const googleUser = this.authSvc.loginGoogle();
      if (googleUser) {
        this.router.navigate(['/LandingHome']);
      }
    } catch (error) {
      console.log(error);
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
