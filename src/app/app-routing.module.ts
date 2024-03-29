import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCMSComponent} from './admin/admin-cms/admin-cms.component';
import { BullentinBoardDetailPostComponent } from './index-screen/bullentin-board/bullentin-board-detail-post/bullentin-board-detail-post.component';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { DetailsPostComponent } from './index-screen/details-post/details-post.component';
import { IndexScreenComponent } from './index-screen/index-screen.component';
import { LoginComponent} from './login-page/login/login.component'
import { RegisterAccountComponent} from './login-page/register-account/register-account.component'
import { UserProfileComponent } from './user-profile/user-profile.component'
import { IndexTricksComponent } from './user/tricks/index-tricks/index-tricks.component';

const routes: Routes = [
{ path: 'login',component:LoginComponent },
{ path:'index',component:IndexScreenComponent },
{ path: 'create-article', component: CreateArticleComponent },
{ path:'detail/:id',component:DetailsPostComponent },
{ path:'profile/:id',component:UserProfileComponent },
{ path:'register-account',component:RegisterAccountComponent },
{ path:'facts/detail/:id',component:BullentinBoardDetailPostComponent },
  { path: 'admin/index', component: AdminCMSComponent },
  { path:'sonp/tricks',component: IndexTricksComponent },

{ path:'**',component:IndexScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
