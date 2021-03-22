import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { OrderModule } from '../order/order.module';
import { LoginContainer } from './containers/login/login.container';
import { RegisterContainer } from './containers/register/register.container';
import { BannerLoginComponent } from './components/banner-login/banner-login.component';
import { CardLoginComponent } from './components/card-login/card-login.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [LoginComponent, RegisterComponent,LoginContainer,RegisterContainer, BannerLoginComponent, CardLoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    OrderModule,
    MaterialModule
  ]
})
export class AuthModule { }
