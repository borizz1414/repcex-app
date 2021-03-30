import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-new-order-container',
  templateUrl: './information-new-order.container.html',
  styleUrls: ['./information-new-order.container.scss']
})
export class InformationNewOrderContainer implements OnInit {
  user_type = 'dist';
  constructor() { }

  ngOnInit(): void {
  }

}
