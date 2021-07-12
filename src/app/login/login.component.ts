import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public loginService: LoginService,private router: Router) {

  }


  onSubmit(): void {
    const { username, password } = this.form;

    this.loginService.login(username, password);
    console.log(username, password)
  }

}
