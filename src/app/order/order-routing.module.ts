import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationOrderContainer } from './containers/information-order/information-order.container';
import { OrderContainer } from './containers/order/order.container';

const routes: Routes = [
  {
    path:'pedido',
    component:OrderContainer
  },
  {
    path:'informacion',
    component:InformationOrderContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
