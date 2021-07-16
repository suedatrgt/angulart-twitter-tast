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

  }

  goHome() {
    this.router.navigateByUrl(`dashboard`);
  }

}
