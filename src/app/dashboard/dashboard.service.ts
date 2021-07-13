import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
  })
export class DasthboardService{

    constructor(public httpService: HttpClient) { 
         
    }

    getTweets(): Observable<any> {
        return this.httpService.get("https://jsonplaceholder.typicode.com/comments");
    } 

    getTweetUser(id): Observable<any> {
        return this.httpService.get("https://jsonplaceholder.typicode.com/comments/"+id);
    } 
}