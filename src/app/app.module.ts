import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './webpages/home/home.component';
import { InboxComponent } from './webpages/inbox/inbox.component';
import { LoginComponent } from './webpages/login/login.component';
import { RegisterComponent } from './webpages/register/register.component';
import { AdsComponent } from './webpages/ads/ads.component';
import { MyadsComponent } from './webpages/myads/myads.component';
import { SellComponent } from './webpages/sell/sell.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResetpasswordComponent } from './webpages/resetpassword/resetpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InboxComponent,
    LoginComponent,
    RegisterComponent,
    AdsComponent,
    MyadsComponent,
    SellComponent,
    NavbarComponent,
    ResetpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
