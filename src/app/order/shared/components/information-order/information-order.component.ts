import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-order',
  templateUrl: './information-order.component.html',
  styleUrls: ['./information-order.component.scss']
})
export class InformationOrderComponent implements OnInit {
  @Input() content_card;
  panelOpenState;
  constructor() { }

  ngOnInit(): void {
  }

}
