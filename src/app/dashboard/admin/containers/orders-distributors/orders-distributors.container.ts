import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-distributors-container',
  templateUrl: './orders-distributors.container.html',
  styleUrls: ['./orders-distributors.container.scss']
})
export class OrdersDistributorsContainer implements OnInit {
  table_options = {
    icons:['edit','trash'],
    data:[{}],
    displayedColumns:[]

  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
