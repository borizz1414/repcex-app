import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationNewOrderContainer } from './client/containers/information-new-order/information-new-order.container';
import { MyOrdersContainer } from './client/containers/my-orders/my-orders.container';
import { NewOrderContainer } from './client/containers/new-order/new-order.container';
import { OrderDetailsContainer } from './client/containers/order-details/order-details.container';
import { DashboardSkeletonContainer } from './containers/dashboard-skeleton/dashboard-skeleton.container';
import { DirectSellsDetailsContainer } from './distributor/containers/direct-sells-details/direct-sells-details.container';
import { DirectSellsContainer } from './distributor/containers/direct-sells/direct-sells.container';
import { EditProductContainer } from './distributor/containers/edit-product/edit-product.container';
import { MyProductsContainer } from './distributor/containers/my-products/my-products.container';
import { NewDirectSellContainer } from './distributor/containers/new-direct-sell/new-direct-sell.container';
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
        path:'detalle-venta',
        component:DirectSellsDetailsContainer
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
        path:'ventas-directas',
        component:DirectSellsContainer
      },
      {
        path:'mis-productos',
        component:MyProductsContainer
      },
      {
        path:'editar-producto',
        component:EditProductContainer
      },
      {
        path:'nueva-venta-directa',
        component:NewDirectSellContainer
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
