import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  async onLogin() {
    const { email, password } = this.loginForm.value;
    try {
      const user = await this.authSvc.login(email, password);
      if (user) {
        //Redirect to Home Page
        this.router.navigate(['/LandingHome']);
      }
    } catch (error) {
      console.log(error);
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

}
