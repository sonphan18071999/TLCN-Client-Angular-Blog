import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { IndexScreenComponent } from './index-screen/index-screen.component';
import {DetailsPostComponent} from './details-post/details-post.component'
import{ LoginComponent} from './login/login.component'
import { formatNumber } from '@angular/common';
import {CreateArticleComponent } from './create-article/create-article.component';

const routes: Routes = [
{path: 'login',component:LoginComponent},
{path:'index',component:IndexScreenComponent},
{path:'detail-post/:title',component:DetailsPostComponent},
{path:'create-article',component:CreateArticleComponent},
{path:'**',component:IndexScreenComponent},   //Navigate to index page to catch all default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
