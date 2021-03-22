import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainer } from './containers/login/login.container';

const routes: Routes = [
  {
    path:'ingresar',
    component:LoginContainer
  },
  {
    path:'registrarse',
    component:LoginContainer
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
