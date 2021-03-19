import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderContainer} from './containers/order/order.container';
import { HeaderComponent } from './components/header/header.component';
import { CardOrderComponent } from './components/card-order/card-order.component';
import { BannerComponent } from './components/banner/banner.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InformationOrderContainer } from './containers/information-order/information-order.container';


@NgModule({
  declarations: [OrderContainer, HeaderComponent, CardOrderComponent, BannerComponent, InformationOrderContainer],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class OrderModule { }
