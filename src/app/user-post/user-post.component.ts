import { Component, OnInit } from '@angular/core';
import { DasthboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {


  constructor(public dashboardService: DasthboardService) { }

  items: any[] = [];

  ngOnInit(): void {
  
    var url_string = window.location.href; //window.location.href
    var url = new URL(url_string);
    var postId = url.searchParams.get("postId");
   
    this.dashboardService.getTweets().subscribe(data => {

      for (let i = 0; i < data.length; i++) {
       if(postId == data[i].postId) {
        this.items.push(data[i]);
       }
        
      }
      


    });
  }

  
}
