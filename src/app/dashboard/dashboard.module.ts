import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardSkeletonContainer } from './containers/dashboard-skeleton/dashboard-skeleton.container';
import { MyOrdersContainer } from './client/containers/my-orders/my-orders.container';
import { MaterialModule } from '../material/material.module';
import { CurrentPageTagComponent } from './components/current-page-tag/current-page-tag.component';
import { TableMyOrdersComponent } from './client/components/table-my-orders/table-my-orders.component';
import { NewOrderContainer } from './client/containers/new-order/new-order.container';
import { GoBackOrdersComponent } from './client/components/go-back-orders/go-back-orders.component';
import { StepperComponent } from './client/components/stepper/stepper.component';
import { OrderModule } from '../order/order.module';
import { ProductsListComponent } from './client/components/products-list/products-list.component';
import { DistributorListComponent } from './client/components/distributor-list/distributor-list.component';
import { DirectionFormOrderComponent } from './client/components/direction-form-order/direction-form-order.component';
import { InformationNewOrderContainer } from './client/containers/information-new-order/information-new-order.container';
import { FormInformationNewOrderComponent } from './shared/components/form-information-new-order/form-information-new-order.component';
import { OrderDetailsContainer } from './client/containers/order-details/order-details.container';
import { ChipsComponent } from './shared/components/chips/chips.component';
import { NewOrderPlanContainer } from './distributor/containers/new-order-plan/new-order-plan.container';
import { RequestsOnlineContainer } from './distributor/containers/requests-online/requests-online.container';
import { FiltersTableComponent } from './components/filters-table/filters-table.component';
import { TableRequestsOnlineComponent } from './distributor/components/table-requests-online/table-requests-online.component';
import { TableMyProductsComponent } from './distributor/components/table-my-products/table-my-products.component';
import { MyProductsContainer } from './distributor/containers/my-products/my-products.container';
import { DirectSellsContainer } from './distributor/containers/direct-sells/direct-sells.container';
import { DirectSellsDetailsContainer } from './distributor/containers/direct-sells-details/direct-sells-details.container';
import { EditProductContainer } from './distributor/containers/edit-product/edit-product.container';
import { NewDirectSellContainer } from './distributor/containers/new-direct-sell/new-direct-sell.container';
import { HomeAdminContainer } from './admin/containers/home-admin/home-admin.container';
import { FiltersComponent } from './admin/components/filters/filters.component';
import { TableHomeComponent } from './admin/components/table-home/table-home.component';
import { OrdersDistributorsContainer } from './admin/containers/orders-distributors/orders-distributors.container';
import { OrdersClientsContainer } from './admin/containers/orders-clients/orders-clients.container';


@NgModule({
  declarations: [HeaderComponent, SidenavComponent, DashboardSkeletonContainer, MyOrdersContainer, CurrentPageTagComponent, TableMyOrdersComponent, NewOrderContainer, GoBackOrdersComponent, StepperComponent, ProductsListComponent, DistributorListComponent, DirectionFormOrderComponent, InformationNewOrderContainer, FormInformationNewOrderComponent, OrderDetailsContainer, ChipsComponent, NewOrderPlanContainer, RequestsOnlineContainer, FiltersTableComponent, TableRequestsOnlineComponent, TableMyProductsComponent, MyProductsContainer, DirectSellsContainer, DirectSellsDetailsContainer, EditProductContainer, NewDirectSellContainer, HomeAdminContainer, FiltersComponent, TableHomeComponent, OrdersDistributorsContainer, OrdersClientsContainer],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    OrderModule
  ]
})
export class DashboardModule { }
