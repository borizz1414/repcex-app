import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import Swal from 'sweetalert2'
import { FacebookLoginProvider, SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-card-register',
  templateUrl: './card-register.component.html',
  styleUrls: ['./card-register.component.scss']
})
export class CardRegisterComponent implements OnInit {
  formRegister: FormGroup
  spinner:boolean = false;
  user: SocialUser;
  loggedIn: boolean;
  constructor(private _fb : FormBuilder,
    private authService: SocialAuthService,
    private _auth : AuthService,
            ) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user)
      this.loggedIn = (user != null);
    });
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
  
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  onLoginGoogle(){
  
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}

