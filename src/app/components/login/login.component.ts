import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {server} from '../../services/server';
import {Router} from '@angular/router';
import {NotificationService} from '../../services/notification/notification.service';
import {LoginModel} from "./login.model";
import {TranslatePipe} from "../../pipes/translate/translate.pipe";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser: LoginModel;
  token: string;
  userType: number;
  loginError: string;
  isFilled: boolean;

  constructor(private authService: AuthService,
              private router: Router,
              private translate: TranslatePipe,
              private notification: NotificationService) {
    this.loginUser = new LoginModel();
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.ServerPostLogin(server.login, this.loginUser).subscribe(res => {
      this.token = res['token'];
      this.userType = JSON.parse(window.atob((this.token).split('.')[1])).userType;
      if (this.token) {

        if (this.userType === 0 || this.userType === 1 || this.userType === 2) {
          this.authService.saveToken(this.token);
          if (this.userType === 0) {
            sessionStorage.setItem('Role', 'Adm');
          } else if (this.userType === 1) {
            sessionStorage.setItem('Role', 'Per');
          }
          this.router.navigate(['/home']);
        } else {
          this.notification.error('Connection Error');
        }
      }
    }, err => {
      if (err.userTypes >= 400 || err.userTypes < 500) {
        this.loginError = this.translate.transform(err.error.detail, []);
        this.notification.error(this.loginError);
      }
    });
  }

}
