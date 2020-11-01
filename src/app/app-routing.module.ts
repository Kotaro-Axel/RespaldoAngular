import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { TestingComponent } from './testing/testing.component';
import { TestingComponentComponent } from './testing-component/testing-component.component';


const routes: Routes = [
  //{ path: '', redirectTo: 'logging', pathMatch: 'full' },
  //{ path: 'home', component: TestingComponent },
  //{ path: 'logging', component: TestingComponentComponent },

  //Components for Logging: Angular + Firebase* 

  { path: '', redirectTo: '/LandingHome', pathMatch: 'full'},  
  //Home Page
  { path: 'LandingHome', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  
  //Loging Page
  { path: 'LogingHome', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  
  //Register Page
  { path: 'RegisterHome', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
