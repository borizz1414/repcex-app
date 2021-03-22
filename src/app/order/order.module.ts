import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderContainer} from './containers/order/order.container';
import { HeaderComponent } from './components/header/header.component';
import { CardOrderComponent } from './components/card-order/card-order.component';
import { BannerComponent } from './components/banner/banner.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InformationOrderContainer } from './containers/information/information-order.container';
import { HeaderCardComponent } from './shared/components/header-card/header-card.component';
import { InformationOrderComponent } from './shared/components/information-order/information-order.component';
import { DistributorOrderComponent } from './shared/components/distributor-order/distributor-order.component';
import { ClientOrderComponent } from './shared/components/client-order/client-order.component';
import { DistributorContainer } from './containers/distributor/distributor.container';



@NgModule({
  declarations: [OrderContainer, HeaderComponent, CardOrderComponent, BannerComponent, InformationOrderContainer, HeaderCardComponent, InformationOrderComponent, DistributorOrderComponent, ClientOrderComponent, DistributorContainer ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class OrderModule { }
