
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
  {name_product: 'REPCEX', type_product:'60ml', img_product:'assets/img/bg/producto-azul.png' ,quantity: 7, price: 1225 , status:'chip-orange'},
  {name_product: 'REPCEX', type_product:'60ml', img_product:'assets/img/bg/producto-azul.png' ,quantity: 8, price: 125 , status:'chip-gray'},
  {name_product: 'REPCEX', type_product:'60ml', img_product:'assets/img/bg/producto-azul.png' ,quantity: 9, price: 1235 , status:'chip-turquoise'},
  {name_product: 'REPCEX', type_product:'60ml', img_product:'assets/img/bg/producto-azul.png' ,quantity: 10, price: 1425 , status:'chip-green'},


];

/**
 * @title Table with sorting
 */

 @Component({
  selector: 'app-table-my-orders',
  templateUrl: './table-my-orders.component.html',
  styleUrls: ['./table-my-orders.component.scss']
})
export class TableMyOrdersComponent implements OnInit {
  displayedColumns: string[] = ['product', 'quantity', 'price', 'status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}