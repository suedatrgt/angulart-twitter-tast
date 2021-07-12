import { Component, OnInit } from "@angular/core";
import { DasthboardService } from "./dashboard.service";

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  title = "Dashboard Page";
  items: any[] = [];
  constructor(public dashboardService: DasthboardService) {

  }

  ngOnInit() {

    this.dashboardService.getUsers().subscribe(data => {
  
      data.forEach(element => {
        this.items.push(element)
      });
      console.log(this.items);
    });
    


  }
}

