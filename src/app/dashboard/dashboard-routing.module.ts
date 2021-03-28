import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationNewOrderContainer } from './client/containers/information-new-order/information-new-order.container';
import { MyOrdersContainer } from './client/containers/my-orders/my-orders.container';
import { NewOrderContainer } from './client/containers/new-order/new-order.container';
import { OrderDetailsContainer } from './client/containers/order-details/order-details.container';
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
        path:'nuevo-pedido/informacion',
        component:InformationNewOrderContainer
      },
      {
        path:'detalle-pedido',
        component:OrderDetailsContainer
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
