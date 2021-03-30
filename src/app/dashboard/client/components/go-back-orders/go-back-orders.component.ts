import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-go-back-orders',
  templateUrl: './go-back-orders.component.html',
  styleUrls: ['./go-back-orders.component.scss']
})
export class GoBackOrdersComponent implements OnInit {

  constructor(private _location: Location) 
  {}
  ngOnInit(): void {
 
  }
  backClicked() {
    this._location.back();
  }

}
