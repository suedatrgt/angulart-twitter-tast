import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
@Injectable({
    providedIn: 'root'
  })
export class LoginService{
    public isLoggedIn = false;

    constructor(public httpService: HttpClient, public router: Router) { 
         
    }


    login(username: string, password: string) {
        
    if (username !== "admin" || password !== "admin") {
        // this.errorMessage = "kullanıcı adı veya şifre hatalı";
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.router.navigateByUrl('/dashboard');
      }
  
        window.localStorage.setItem('isLoggedIn', this.isLoggedIn.toString());
    }

    logOut() { 
        window.localStorage.removeItem('isLoggedIn');
        this.router.navigateByUrl('/');
    }

}