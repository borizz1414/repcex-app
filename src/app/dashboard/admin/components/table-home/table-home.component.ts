import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name_product: string;
  type_product: string;
  img_product: string;
  quantity: any;
  price:any;
  status:string;
  city:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name_product: 'Fernando Garcias', type_product:'Minorista', img_product:'assets/img/profile.png' ,quantity: 5.5, city:'Medellin',price: 'elwdw@gmail.com' , status:'+5815445155'},
  {name_product: 'Fernando Garcias', type_product:'Distribuidor', img_product:'assets/img/profile.png' ,quantity:5.3, city:'Medellin',price: 'elwdw@gmail.com' , status:'+5815445155'},
  {name_product: 'Fernando Garcias', type_product:'Distribuidor', img_product:'assets/img/profile.png' ,quantity: 5.2, city:'Medellin',price: 'elwdw@gmail.com' , status:'+5815445155'},
  {name_product: 'Fernando Garcias', type_product:'Minorista', img_product:'assets/img/profile.png' ,quantity: 1, city:'Medellin',price: 'elwdw@gmail.com' , status:'+5815445155'},
  {name_product: 'Fernando Garcias', type_product:'Distribuidor', img_product:'assets/img/profile.png' ,quantity: 4, city:'Medellin',price: 'elwdw@gmail.com' , status:'+5815445155'},


];

/**
 * @title Table with sorting
 */

 @Component({
  selector: 'app-table-home',
  templateUrl: './table-home.component.html',
  styleUrls: ['./table-home.component.scss']
})
export class TableHomeComponent implements OnInit {
  displayedColumns: string[] = ['user', 'qualification', 'email', 'phone', 'city', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}