import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.scss']
})
export class CardLoginComponent implements OnInit {
  formLogin: FormGroup
  spinner:boolean = false;
  constructor(private _fb :FormBuilder,
      private _auth : AuthService,
 ) { }

  ngOnInit(): void {

    this.buildForm();
  }
  private buildForm(){
    this.formLogin = this._fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',Validators.required],

    })
  }
  login(){
    this.spinner = true;
    console.log(this.formLogin.value)
    this._auth.login(this.formLogin.value).subscribe(
      resp =>{
        this.spinner = false;
        resp.message !== undefined ? Swal.fire('Ups...', 'Datos invalidos', 'error') : Swal.fire('¡Bien!', 'Te haz identificado con exito', 'success')
      },
      error =>{
        console.log(error)
        Swal.fire('Ups...', error, 'error')
      }

    )
  }

}
