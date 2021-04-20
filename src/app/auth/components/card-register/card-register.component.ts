import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-card-register',
  templateUrl: './card-register.component.html',
  styleUrls: ['./card-register.component.scss']
})
export class CardRegisterComponent implements OnInit {
  formRegister: FormGroup
  spinner:boolean = false;
  constructor(private _fb : FormBuilder,
            private _auth : AuthService,
            ) { }

  ngOnInit(): void {
    this.buildForm()
  }
 private buildForm(){
    this.formRegister = this._fb.group({
      name: ["", Validators.required],
      email:["", [Validators.required, Validators.email]],
      password:["", Validators.required]
    })
  }
  register(){
    this.spinner = true;
    this._auth.registerUser(this.formRegister.value).subscribe(resp => {
      console.log(resp)
      this.spinner = false;
      Swal.fire('¡Bien!', 'Te haz registrado con exito', 'success')
      

    },
    error =>{
      console.log(error)
      Swal.fire('Ups...', error, 'error')
    })
  }
  spinnerChange(bool : boolean){

  }
  onLoginFacebook(){
  
    // this.afAuth.signInWithPopup(FacebookAuthProvider())
  }
}

