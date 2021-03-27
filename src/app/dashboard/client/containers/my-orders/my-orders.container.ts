import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name_product: string;
  type_product: string;
  img_product: string;
  quantity:number;
  price:number;
  status:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name_product: 'REPCEX', type_product:'60ml', img_product:'assets/img/bg/producto-azul.png' ,quantity: 6, price: 125 , status:'chip-green'},
  {name_product: 'REPCEX', type_product:'60ml', img_product:'assets/img/bg/producto-azul.png' ,quantity: 6, price: 125 , status:'chip-orange'},
  {name_product: 'REPCEX', type_product:'60ml', img_product:'assets/img/bg/producto-azul.png' ,quantity: 6, price: 125 , status:'chip-gray'},
  {name_product: 'REPCEX', type_product:'60ml', img_product:'assets/img/bg/producto-azul.png' ,quantity: 6, price: 125 , status:'chip-turquoise'},
  {name_product: 'REPCEX', type_product:'60ml', img_product:'assets/img/bg/producto-azul.png' ,quantity: 6, price: 125 , status:'chip-green'},


];

/**
 * @title Table with sorting
 */

 @Component({
  selector: 'app-my-orders-container',
  templateUrl: './my-orders.container.html',
  styleUrls: ['./my-orders.container.scss']
})
export class MyOrdersContainer implements OnInit {
  displayedColumns: string[] = ['product', 'quantity', 'price', 'status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}