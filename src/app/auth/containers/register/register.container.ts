import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register-container',
  templateUrl: './register.container.html',
  styleUrls: ['./register.container.scss'],
})
export class RegisterContainer implements OnInit {
  constructor(private _auth: AuthService) {}

  ngOnInit(): void {
  this._auth.AuthNavigate('dashboard') //Ruta ala que se redirigira
  }

}
