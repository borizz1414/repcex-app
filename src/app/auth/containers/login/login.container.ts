import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-container',
  templateUrl: './login.container.html',
  styleUrls: ['./login.container.scss']
})
export class LoginContainer implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit(): void {
    this.validateAuth()
  }
  validateAuth(){
    if(localStorage.getItem('token') !== null) this._router.navigate(['/dashboard'])
  }
}
