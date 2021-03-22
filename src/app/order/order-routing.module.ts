import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistributorContainer } from './containers/distributor/distributor.container';
import { InformationOrderContainer } from './containers/information/information-order.container';
import { OrderContainer } from './containers/order/order.container';

const routes: Routes = [
  {
    path:'',
    component:OrderContainer
  },
  {
    path:'informacion',
    component:InformationOrderContainer
  },
  {
    path:'distribuidor',
    component:DistributorContainer
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
