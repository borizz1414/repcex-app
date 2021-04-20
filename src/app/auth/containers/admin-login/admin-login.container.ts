import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-admin-login-container',
  templateUrl: './admin-login.container.html',
  styleUrls: ['./admin-login.container.scss']
})
export class AdminLoginContainer implements OnInit {

  constructor(private _auth: AuthService) {}

  ngOnInit(): void {
    this._auth.AuthNavigate('dashboard');
  }

}
