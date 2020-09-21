//AppModules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingComponent } from './testing/testing.component';
import { TestingComponentComponent } from './testing-component/testing-component.component';

import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { OrderComponent } from './components/order/order.component';
import { ProductComponent } from './components/product/product.component';
import { SaleComponent } from './components/sale/sale.component';
import { UserAdminComponent } from './components/user-admin/user-admin.component';

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
    UserAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
