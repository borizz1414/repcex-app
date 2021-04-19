import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.scss']
})
export class CardLoginComponent implements OnInit {
  formLogin: FormGroup
  constructor(private _fb :FormBuilder,
      private _auth : AuthService) { }

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
    console.log(this.formLogin.value)
    this._auth.login(this.formLogin.value).subscribe(
      resp =>{
        console.log(resp)
        Swal.fire('¡Enhorabuena!', 'Te haz registrado con exito', 'success')
      },
      error =>{
        console.log(error)
        Swal.fire('Ups...', error, 'error')
      }

    )
  }
}
