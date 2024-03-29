import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NGZorroModule } from './ng-zoro.module';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { SocketioService } from './index-screen/details-post/socketio.service';
import { ToastrModule } from 'ngx-toastr';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { AdminCMSComponent } from './admin/admin-cms/admin-cms.component';
import { AdminLineGraphChartJSComponent } from './admin/admin-line-graph-chart-js/admin-line-graph-chart-js.component';
import { AdminCircleGraphChartJsComponent } from './admin/admin-circle-graph-chart-js/admin-circle-graph-chart-js.component';
import { AdminAllArticlesComponent } from './admin/admin-all-articles/admin-all-articles.component';
import { AdminArticlesReportedComponent } from './admin/admin-articles-reported/admin-articles-reported.component';
import { AdminDialogOptionComponent } from './admin/admin-dialog-option/admin-dialog-option.component';
import { BullentinBoardCreatePostComponent } from './index-screen/bullentin-board/bullentin-board-create-post/bullentin-board-create-post.component';
import { BullentinBoardDetailPostComponent } from './index-screen/./bullentin-board/bullentin-board-detail-post/bullentin-board-detail-post.component';
import { BullentinBoardIndexComponent } from './index-screen/./bullentin-board/bullentin-board-index/bullentin-board-index.component';
import { BullentinBoardPostCommentsComponent } from './index-screen/bullentin-board/bullentin-board-post-comments/bullentin-board-post-comments.component';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { DialogBanArticleComponent } from './dialog-ban-article/dialog-ban-article.component';
import { DetailsPostRelatedArticleComponent } from './details-post-related-article/details-post-related-article.component';
import { DetailsPostComponent } from './index-screen/details-post/details-post.component';
import { DashBoardComponent } from './admin/dash-board/dash-board.component';
import { IndexScreenComponent } from './index-screen/index-screen.component';
import { IndexPostComponent } from './index-screen/index-post/index-post.component';
import { LoginComponent } from './login-page/login/login.component';
import { HeaderComponent } from './commons/header/header.component';
import { PopUpPostContentComponent } from './index-screen/index-post/pop-up-post-content/pop-up-post-content.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegisterAccountComponent } from './login-page/register-account/register-account.component';
import { ReportArticleComponent } from './report-article/report-article.component'
import { SearchArticleComponent } from './commons/search-article/search-article.component';
import { WaitingApprovalArticleComponent } from './waiting-approval-article/waiting-approval-article.component';
import { LoaderArticleComponent } from './commons/loader/loader-article/loader-article.component';
import { UserCommentComponent } from './index-screen/details-post/user-comment/user-comment.component';
import { ImageSlideShowComponent } from './user/tricks/image-slide-show/image-slide-show.component';
import { IndexTricksComponent } from './user/tricks/index-tricks/index-tricks.component';
import { ReadDataExcelComponent } from './user/tricks/read-data-excel/read-data-excel.component';
import { MailServiceComponent } from './user/tricks/mail-service/mail-service.component';

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
    BullentinBoardPostCommentsComponent,
    LoaderArticleComponent,
    UserCommentComponent,
    ImageSlideShowComponent,
    IndexTricksComponent,
    ReadDataExcelComponent,
    MailServiceComponent
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
