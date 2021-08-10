import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCMSComponent} from './admin-cms/admin-cms.component';
import { BullentinBoardDetailPostComponent } from './index-screen/bullentin-board/bullentin-board-detail-post/bullentin-board-detail-post.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { IndexScreenComponent } from './index-screen/index-screen.component';
import { LoginComponent} from './login-page/login/login.component'
import { RegisterAccountComponent} from './login-page/register-account/register-account.component'
import { UserProfileComponent } from './user-profile/user-profile.component'

const routes: Routes = [
{path: 'login',component:LoginComponent},
{path:'index',component:IndexScreenComponent},
{path:'create-article',component:CreateArticleComponent},
{path:'profile/:id',component:UserProfileComponent},
{path:'register-account',component:RegisterAccountComponent},
{path:'facts/detail/:id',component:BullentinBoardDetailPostComponent},
{path:'admin/index',component:AdminCMSComponent},
{path:'**',component:IndexScreenComponent},   //Navigate to index page to catch all default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
