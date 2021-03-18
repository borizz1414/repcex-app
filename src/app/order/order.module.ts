import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderContainer} from './containers/order/order.container';
import { HeaderComponent } from './components/header/header.component';
import { CardOrderComponent } from './components/card-order/card-order.component';
import { BannerComponent } from './components/banner/banner.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [OrderContainer, HeaderComponent, CardOrderComponent, BannerComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MaterialModule
  ]
})
export class OrderModule { }
