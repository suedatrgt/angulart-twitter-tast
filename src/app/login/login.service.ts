import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
  })
export class LoginService{

    constructor(public httpService: HttpClient) { 
         
    }

    getTweet(){
        return this.httpService.get("https://jsonplaceholder.typicode.com/todos/1");
    }



}