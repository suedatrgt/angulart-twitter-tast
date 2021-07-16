import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DasthboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-user-tweet',
  templateUrl: './user-tweet.component.html',
  styleUrls: ['./user-tweet.component.css']
})
export class UserTweetComponent implements OnInit {
 //
  constructor(public dashboardService: DasthboardService,public route: ActivatedRoute) {
    
   }

  items: any[] = []; 

 
  ngOnInit(): void {
  
    var url_string = window.location.href; 
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
   
    this.dashboardService.getTweetUser(id).subscribe(data => { 
      this.items.push(data);  
    });
  }
}
