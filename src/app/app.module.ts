import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {MaterialModule } from './material.module';
import { IndexScreenComponent } from './index-screen/index-screen.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexPostComponent } from './index-post/index-post.component';
import { PopUpPostContentComponent } from './pop-up-post-content/pop-up-post-content.component';
import { DetailsPostComponent } from './details-post/details-post.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { SocketioService } from './details-post/socketio.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegisterAccountComponent } from './register-account/register-account.component';
import { WaitingApprovalArticleComponent } from './waiting-approval-article/waiting-approval-article.component';
import {ReportArticleComponent} from './report-article/report-article.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexScreenComponent,
    HeaderComponent,
    FooterComponent,
    IndexPostComponent,
    PopUpPostContentComponent,
    DetailsPostComponent,
    CreateArticleComponent,
    UserProfileComponent,
    RegisterAccountComponent,
    WaitingApprovalArticleComponent,
    ReportArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [SocketioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
