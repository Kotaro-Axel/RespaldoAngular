//AppModules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Componentes de Prueba
import { TestingComponent } from './testing/testing.component';
import { TestingComponentComponent } from './testing-component/testing-component.component';
//

import {HttpClientModule} from '@angular/common/http';

//No se usan:
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { OrderComponent } from './components/order/order.component';
import { ProductComponent } from './components/product/product.component';
import { SaleComponent } from './components/sale/sale.component';
import { UserAdminComponent } from './components/user-admin/user-admin.component';
//

import { HeaderComponent } from './header/header.component';

//Angular/Firebase Modules
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

//Import FireBase Configuraton file 
import { firebaseConfig } from '../environments/config';


@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    TestingComponentComponent,
    DashboardComponent,
    RegisterComponent,
    OrderComponent,
    ProductComponent,
    SaleComponent,
    UserAdminComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
