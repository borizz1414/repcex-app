import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-order-plan-container',
  templateUrl: './new-order-plan.container.html',
  styleUrls: ['./new-order-plan.container.scss']
})
export class NewOrderPlanContainer implements OnInit {
  user_type="dist"
  constructor() { }

  ngOnInit(): void {
  }

}
