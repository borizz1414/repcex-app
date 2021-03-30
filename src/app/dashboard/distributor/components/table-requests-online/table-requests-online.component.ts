import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name_product: string;
  type_product: string;
  img_product: string;
  email_client: string;
  quantity: number;
  price: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name_product: 'REPCEX',
    email_client: 'cliente_jose@gmail.com',
    type_product: '60ml',
    img_product: 'assets/img/bg/producto-azul.png',
    quantity: 6,
    price: 125,
    status: 'chip-green',
  },
  {
    name_product: 'REPCEX',
    email_client: 'cliente_jose@gmail.com',
    type_product: '60ml',
    img_product: 'assets/img/bg/producto-azul.png',
    quantity: 7,
    price: 1225,
    status: 'chip-orange',
  },
  {
    name_product: 'REPCEX',
    email_client: 'cliente_jose@gmail.com',
    type_product: '60ml',
    img_product: 'assets/img/bg/producto-azul.png',
    quantity: 8,
    price: 125,
    status: 'chip-gray',
  },
  {
    name_product: 'REPCEX',
    email_client: 'cliente_jose@gmail.com',
    type_product: '60ml',
    img_product: 'assets/img/bg/producto-azul.png',
    quantity: 9,
    price: 1235,
    status: 'chip-turquoise',
  },
  {
    name_product: 'REPCEX',
    email_client: 'cliente_jose@gmail.com',
    type_product: '60ml',
    img_product: 'assets/img/bg/producto-azul.png',
    quantity: 10,
    price: 1425,
    status: 'chip-green',
  },
];

/**
 * @title Table with sorting
 */

@Component({
  selector: 'app-table-requests-online',
  templateUrl: './table-requests-online.component.html',
  styleUrls: ['./table-requests-online.component.scss'],
})
export class TableRequestsOnlineComponent implements OnInit {
  displayedColumns: string[] = [
    'product',
    'client',
    'quantity',
    'price',
    'actions',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @Input() status_column: string;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.removeColumns();
    this.dataSource.sort = this.sort;
  }
  removeColumns() {
    this.status_column === '1'
      ? (this.displayedColumns.pop(),
        this.displayedColumns.push('status'),
        this.displayedColumns.push('actions'))
      : this.displayedColumns;
  }
}
