import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(public loginService: LoginService) {

  }


  onSubmit(): void {
    const { username, password } = this.form;

    if (username !== "ahmet" || password !== "ahmet") {
      this.errorMessage = "kullanıcı adı veya şifre hatalı";
      this.isLoginFailed = true;
    } else {

      this.isLoginFailed = false;
      this.isLoggedIn = true;
    }


    console.log(username, password)
  }

}
