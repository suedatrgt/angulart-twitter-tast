import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public loginService:LoginService,public router:Router) { }

  ngOnInit(): void {
  }
  logOut() {
    this.loginService.logOut();
  }
  goHome() {
    this.router.navigateByUrl(`dashboard`);
  }
}
