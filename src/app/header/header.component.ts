import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DasthboardService } from '../dashboard/dashboard.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loginService: LoginService, public dashboardService: DasthboardService, public router: Router) { }
  items: any[] = [];
  postIds: any[] = [];

  ngOnInit(): void {

    this.dashboardService.getTweets().subscribe(data => {

      data.forEach(element => {
        this.items.push(element)
      });

      this.postIds = [...new Map(this.items.map(item =>
        [item["postId"], item])).values()];

    });
  }

  getTweetByID(id) {
    this.router.navigateByUrl(`dashboard/user?id=${id}`);
  }


  getTweetsByPostID(id) {
    this.router.navigateByUrl(`dashboard/userpost?postId=${id}`);
  }

  goHome() {
    this.router.navigateByUrl(`dashboard`);
  }
  logOut() {
    this.loginService.logOut();
  }
}
