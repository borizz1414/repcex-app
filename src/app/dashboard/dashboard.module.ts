import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardSkeletonContainer } from './containers/dashboard-skeleton/dashboard-skeleton.container';
import { MyOrdersContainer } from './client/containers/my-orders/my-orders.container';
import { MaterialModule } from '../material/material.module';
import { CurrentPageTagComponent } from './components/current-page-tag/current-page-tag.component';


@NgModule({
  declarations: [HeaderComponent, SidenavComponent, DashboardSkeletonContainer, MyOrdersContainer, CurrentPageTagComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
