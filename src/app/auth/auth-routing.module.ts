import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainer } from './containers/login/login.container';
import { RecoveryPasswordContainer } from './containers/recovery-password/recovery-password.container';
import { RegisterContainer } from './containers/register/register.container';

const routes: Routes = [
  {
    path:'ingresar',
    component:LoginContainer
  },
  {
    path:'registro',
    component:RegisterContainer
  },
  {
    path:'recuperar-contraseña',
    component:RecoveryPasswordContainer
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
