import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderContainer } from './containers/order/order.container';

const routes: Routes = [
  {
    path:'',
    component:OrderContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
