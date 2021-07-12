import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'; 
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
        LoginComponent],
  imports: [
    BrowserModule,
    LoginRoutingModule, 
    FormsModule      
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
