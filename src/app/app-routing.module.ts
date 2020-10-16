import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { IndexScreenComponent } from './index-screen/index-screen.component';
import {DetailsPostComponent} from './details-post/details-post.component'
import{ LoginComponent} from './login/login.component'
import { formatNumber } from '@angular/common';
import{ProfileComponent} from'./profile/profile.component'
const routes: Routes = [{path: '',component:LoginComponent},
{path:'index',component:IndexScreenComponent},
{path:'detail-post/:id',component:DetailsPostComponent},
{path:'profile/:id',component:ProfileComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
