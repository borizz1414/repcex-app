import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { OrderModule } from '../order/order.module';
import { LoginContainer } from './containers/login/login.container';
import { RegisterContainer } from './containers/register/register.container';
import { BannerLoginComponent } from './components/banner-login/banner-login.component';
import { CardLoginComponent } from './components/card-login/card-login.component';
import { MaterialModule } from '../material/material.module';
import { RecoveryPasswordContainer } from './containers/recovery-password/recovery-password.container';
import { CardRegisterComponent } from './components/card-register/card-register.component';
import { CardRecoveryPasswordComponent } from './components/card-recovery-password/card-recovery-password.component';
import { AdminLoginContainer } from './containers/admin-login/admin-login.container';
import { CardAdminLoginComponent } from './components/card-admin-login/card-admin-login.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginContainer,RegisterContainer, BannerLoginComponent, CardLoginComponent, RecoveryPasswordContainer, CardRegisterComponent, CardRecoveryPasswordComponent, AdminLoginContainer, CardAdminLoginComponent],
  exports:[BannerLoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    OrderModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AuthModule { }
