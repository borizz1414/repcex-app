import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() distributor : Boolean;
  @Input()btn : Boolean;
  constructor(public router : Router) { }

  ngOnInit(): void {
  }
  switchUser(){
    let url = '/pedido'
    console.log(this.distributor)
    !this.distributor ? url= '/pedido' : url = '/pedido/distribuidor';
    this.router.navigate([url]);
  }

}
