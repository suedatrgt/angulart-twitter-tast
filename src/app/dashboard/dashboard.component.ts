import { Component } from "@angular/core";

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent {
    title = "Dashboard Page";
    constructor() {
console.log("asd")
    }
}