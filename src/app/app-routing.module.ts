import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './webpages/register/register.component';
import { MyadsComponent } from './webpages/myads/myads.component';
import { AdsComponent } from './webpages/ads/ads.component';
import { HomeComponent } from './webpages/home/home.component';
import { InboxComponent } from './webpages/inbox/inbox.component';
import { LoginComponent } from './webpages/login/login.component';
import { ResetpasswordComponent } from './webpages/resetpassword/resetpassword.component';
import { SellComponent } from './webpages/sell/sell.component';


const routes: Routes = [
  {path:'resetpassword', component:ResetpasswordComponent},
  {path:'register',component:RegisterComponent},
  {path:'myads',component:MyadsComponent},
  {path:'ads',component:AdsComponent},
  {path:'home',component:HomeComponent},
  {path:'inbox',component:InboxComponent},
  {path:'login', component:LoginComponent},
  {path:'sell', component:SellComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
