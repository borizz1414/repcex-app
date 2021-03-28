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


@NgModule({
  declarations: [HeaderComponent, SidenavComponent, DashboardSkeletonContainer, MyOrdersContainer, CurrentPageTagComponent, TableMyOrdersComponent, NewOrderContainer, GoBackOrdersComponent, StepperComponent, ProductsListComponent, DistributorListComponent, DirectionFormOrderComponent, InformationNewOrderContainer, FormInformationNewOrderComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    OrderModule
  ]
})
export class DashboardModule { }
