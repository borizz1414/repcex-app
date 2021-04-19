import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-card-recovery-password',
  templateUrl: './card-recovery-password.component.html',
  styleUrls: ['./card-recovery-password.component.scss']
})
export class CardRecoveryPasswordComponent implements OnInit {
  formForgotPassword:FormGroup;
  constructor(private _fb:FormBuilder,
      private _auth :AuthService) { }

  ngOnInit(): void {
    this.buildForm()
  }
private buildForm(){
  this.formForgotPassword = this._fb.group({
    email:['', [Validators.email, Validators.required]]
  })
}
recoveryPassword(){
  this._auth.changePassword(this.formForgotPassword.value).subscribe(
    resp =>{
      Swal.fire('¡Enhorabuena!', 'Te hemos enviado un correo para cambiar la contraseña', 'success')
    },
    error =>{
      console.log(error)
      Swal.fire('Ups...', error, 'error')
    }
  )
}
}
