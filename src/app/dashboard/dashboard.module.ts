import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DasthboardService } from './dashboard.service';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule 
  ],
  providers: [
    DasthboardService
  ]
})
export class DashboardModule { }
