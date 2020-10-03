import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public user: Observable<any> = this.authSvc.afAuth.user;
  
  constructor(private authSvc: AuthService, private router: Router) { }

  
  ngOnInit(): void {
  }

}
