import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyOrdersContainer } from './client/containers/my-orders/my-orders.container';
import { NewOrderContainer } from './client/containers/new-order/new-order.container';
import { DashboardSkeletonContainer } from './containers/dashboard-skeleton/dashboard-skeleton.container';


const routes: Routes = [
  {
    path:'',
    component:DashboardSkeletonContainer,
    children:[
      {
        path:'mis-pedidos',
        component:MyOrdersContainer
      },
      {
        path:'nuevo-pedido',
        component:NewOrderContainer
      },
      {
        path:'**',
        redirectTo:'mis-pedidos'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
