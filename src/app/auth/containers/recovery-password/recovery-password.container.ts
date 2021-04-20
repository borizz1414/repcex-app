import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-recovery-password-container',
  templateUrl: './recovery-password.container.html',
  styleUrls: ['./recovery-password.container.scss'],
})
export class RecoveryPasswordContainer implements OnInit {
  constructor(private _auth: AuthService) {}

  ngOnInit(): void {
    this._auth.AuthNavigate('dashboard');
  }

}
