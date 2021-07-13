import { Component } from "@angular/core";
import { LoginService } from "../login/login.service";

@Component({
    selector: 'layout',
    templateUrl: 'layout.component.html',
    styleUrls: ['layout.component.css']
})
export class LayoutComponent {
    title = "Layout Page";
    constructor( ) {

    }
    
}