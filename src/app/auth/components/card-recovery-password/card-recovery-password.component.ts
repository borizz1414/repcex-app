import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

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
}
