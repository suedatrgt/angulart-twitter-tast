import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; 
import { LayoutComponent } from './layout/layout.component'; 
import { HeaderComponent } from './header/header.component';
import { UserTweetComponent } from './user-tweet/user-tweet.component';
import { UserPostComponent } from './user-post/user-post.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent, 
    HeaderComponent, UserTweetComponent,  UserPostComponent, SidebarComponent, RightsidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
