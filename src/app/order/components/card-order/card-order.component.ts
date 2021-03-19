import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-order',
  templateUrl: './card-order.component.html',
  styleUrls: ['./card-order.component.scss']
})
export class CardOrderComponent implements OnInit {
  @Input() content_card;
  constructor() { }

  ngOnInit(): void {
  }

}
