import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NGZorroModule } from './ng-zoro.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {MaterialModule } from './material.module';
import { IndexScreenComponent } from './index-screen/index-screen.component';
import { HeaderComponent } from './commons/header/header.component';
import { IndexPostComponent } from './index-post/index-post.component';
import { PopUpPostContentComponent } from './pop-up-post-content/pop-up-post-content.component';
import { DetailsPostComponent } from './details-post/details-post.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { SocketioService } from './details-post/socketio.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegisterAccountComponent } from './register-account/register-account.component';
import { WaitingApprovalArticleComponent } from './waiting-approval-article/waiting-approval-article.component';
import {ReportArticleComponent} from './report-article/report-article.component'
import { ToastrModule } from 'ngx-toastr';
import { AdminCMSComponent } from './admin-cms/admin-cms.component';
import { SearchArticleComponent } from './search-article/search-article.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AdminAllArticlesComponent } from './admin-all-articles/admin-all-articles.component';
import { AdminArticlesReportedComponent } from './admin-articles-reported/admin-articles-reported.component';
import { AdminDialogOptionComponent } from './admin-dialog-option/admin-dialog-option.component';
import { DialogBanArticleComponent } from './dialog-ban-article/dialog-ban-article.component';
import { ChartsModule } from 'ng2-charts';
import { AdminLineGraphChartJSComponent } from './admin-line-graph-chart-js/admin-line-graph-chart-js.component';
import { AdminCircleGraphChartJsComponent } from './admin-circle-graph-chart-js/admin-circle-graph-chart-js.component';
import { DetailsPostRelatedArticleComponent } from './details-post-related-article/details-post-related-article.component';
import { BullentinBoardCreatePostComponent } from './bullentin-board/bullentin-board-create-post/bullentin-board-create-post.component';
import { BullentinBoardDetailPostComponent } from './bullentin-board/bullentin-board-detail-post/bullentin-board-detail-post.component';
import { BullentinBoardIndexComponent } from './bullentin-board/bullentin-board-index/bullentin-board-index.component';
import { BullentinBoardPostCommentsComponent } from './bullentin-board/bullentin-board-post-comments/bullentin-board-post-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexScreenComponent,
    HeaderComponent,
    IndexPostComponent,
    PopUpPostContentComponent,
    DetailsPostComponent,
    CreateArticleComponent,
    UserProfileComponent,
    RegisterAccountComponent,
    WaitingApprovalArticleComponent,
    ReportArticleComponent,
    AdminCMSComponent,
    SearchArticleComponent,
    DashBoardComponent,
    AdminAllArticlesComponent,
    AdminArticlesReportedComponent,
    AdminDialogOptionComponent,
    DialogBanArticleComponent,
    AdminLineGraphChartJSComponent,
    AdminCircleGraphChartJsComponent,
    DetailsPostRelatedArticleComponent,
    BullentinBoardCreatePostComponent,
    BullentinBoardDetailPostComponent,
    BullentinBoardIndexComponent,
    BullentinBoardPostCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ChartsModule,
    ToastrModule.forRoot({timeOut: 2000,
      positionClass: 'toast-bottom-right'
    }),
    NGZorroModule
  ],
  providers: [SocketioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
