import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path:"pedido",
  loadChildren: ()=> import("./order/order.module").then(m => m.OrderModule)
},
  {
  path:"auth",
  loadChildren: ()=> import("./auth/auth.module").then(m => m.AuthModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
