import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _auth :AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this._auth.logout()
  }
}
