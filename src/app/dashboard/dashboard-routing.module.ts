import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationNewOrderContainer } from './client/containers/information-new-order/information-new-order.container';
import { MyOrdersContainer } from './client/containers/my-orders/my-orders.container';
import { NewOrderContainer } from './client/containers/new-order/new-order.container';
import { OrderDetailsContainer } from './client/containers/order-details/order-details.container';
import { DashboardSkeletonContainer } from './containers/dashboard-skeleton/dashboard-skeleton.container';
import { DirectSellsContainer } from './distributor/containers/direct-sells/direct-sells.container';
import { MyProductsContainer } from './distributor/containers/my-products/my-products.container';
import { NewOrderPlanContainer } from './distributor/containers/new-order-plan/new-order-plan.container';
import { RequestsOnlineContainer } from './distributor/containers/requests-online/requests-online.container';


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
        path:'nuevo-pedido/distribuidor',
        component:NewOrderPlanContainer
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
        path:'solicitudes',
        component:RequestsOnlineContainer
      },
      {
        path:'ventas-directa',
        component:DirectSellsContainer
      },
      {
        path:'mis-productos',
        component:MyProductsContainer
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
