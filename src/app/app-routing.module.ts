import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestingComponent } from './testing/testing.component';
import { TestingComponentComponent } from './testing-component/testing-component.component';


const routes: Routes = [
  {path:'',redirectTo:'logging',pathMatch:'full'},
  {path:'home', component : TestingComponent},
  {path:'logging', component: TestingComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
